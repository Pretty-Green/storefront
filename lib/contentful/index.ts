import { TAGS } from 'lib/constants';
import { invariant } from '../utils';
import { GetNavigationDocument, TypedDocumentString } from './generated/graphql';

const endpoint = process.env.CONTENTFUL_INSTANCE_URL;
invariant(endpoint, `Missing CONTENTFUL_INSTANCE_URL!`);

type GraphQlError = {
  message: string;
};
type GraphQlErrorRespone<T> = { data: T } | { errors: readonly GraphQlError[] };

export async function saleorFetch<Result, Variables>({
  query,
  variables,
  headers,
  cache,
  tags,
}: {
  query: TypedDocumentString<Result, Variables>;
  variables: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
  tags?: NextFetchRequestConfig['tags'];
}): Promise<Result> {
  invariant(endpoint, `Missing SALEOR_INSTANCE_URL!`);

  const options = cache ? { cache, next: { tags } } : { next: { revalidate: 900, tags } };

  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.CONTENTFUL_INSTANCE_TOKEN || '',
      ...headers,
    },
    body: JSON.stringify({
      query: query.toString(),
      ...(variables && { variables }),
    }),
    ...options,
  });

  const body = (await result.json()) as GraphQlErrorRespone<Result>;

  if ('errors' in body) {
    throw body.errors[0];
  }

  return body.data;
}

export async function getNavigation() {
  const navigation = await saleorFetch({
    query: GetNavigationDocument,
    variables: {},
    tags: [TAGS.collections],
  });

  return navigation;
}
