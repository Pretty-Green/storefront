import { invariant } from '../utils';
import {
  GetFooterDocument,
  GetHeaderDocument,
  GetPageBySlugDocument,
  TypedDocumentString,
} from './generated/graphql';

const endpoint = process.env.CONTENTFUL_INSTANCE_URL;
invariant(endpoint, `Missing CONTENTFUL_INSTANCE_URL!`);

type GraphQlError = {
  message: string;
};
type GraphQlErrorRespone<T> = { data: T } | { errors: readonly GraphQlError[] };

export async function contentfulFetch<Result, Variables>({
  query,
  variables,
  headers,
  cache,
  tags,
}: {
  query: TypedDocumentString<Result, Variables>;
  variables?: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
  tags?: NextFetchRequestConfig['tags'];
}): Promise<Result> {
  invariant(endpoint, `Missing CONTENTFUL_INSTANCE_URL!`);

  const options = cache ? { cache, next: { tags } } : { next: { revalidate: 3600 } };

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

export async function getPageByPath({ path }: { path: string }) {
  const contentfulPage = await contentfulFetch({
    query: GetPageBySlugDocument,
    variables: { path },
  });

  const pageCollection = contentfulPage.pageCollection?.items;

  if (pageCollection?.length === 0) {
    throw new Error(`Page not found: ${path}`);
  }

  const targetPage = pageCollection?.[0];

  if (!targetPage) {
    throw new Error(`Draft: Page not found: ${path}`);
  }

  return targetPage;
}

export async function getFooter() {
  const { footer } = await contentfulFetch({
    query: GetFooterDocument,
  });

  if (!footer) {
    throw new Error(`Footer missing`);
  }

  return footer;
}

export async function getHeader() {
  const { header } = await contentfulFetch({
    query: GetHeaderDocument,
  });

  if (!header) {
    throw new Error(`Footer missing`);
  }

  return header;
}
