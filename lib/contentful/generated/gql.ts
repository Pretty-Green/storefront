/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment Link on Link {\n  externalName\n  internalName\n  url\n}': types.LinkFragmentDoc,
  'fragment Media on Media {\n  externalName\n  internalName\n  link {\n    ...Link\n  }\n  altText\n}':
    types.MediaFragmentDoc,
  'fragment NavigationItem on NavigationItem {\n  externalName\n  internalName\n  mainLink {\n    ...Link\n  }\n  navigationLinksCollection(limit: 9) {\n    total\n    items {\n      ...Link\n    }\n  }\n  mediaCollection(limit: 9) {\n    total\n    items {\n      ...Media\n    }\n  }\n  colour {\n    internalName\n    colourHex\n  }\n}':
    types.NavigationItemFragmentDoc,
  'query GetNavigation {\n  navigationCollection(\n    where: {OR: [{internalName: "Main Navigation Mobile"}, {internalName: "Main Navigation Desktop"}]}\n    limit: 2\n  ) {\n    items {\n      sys {\n        id\n      }\n      internalName\n      navColour {\n        colourHex\n      }\n      navigationItemsCollection(limit: 10) {\n        total\n        items {\n          ...NavigationItem\n          navigationItemsCollection(limit: 10) {\n            total\n            items {\n              ...NavigationItem\n            }\n          }\n        }\n      }\n    }\n  }\n  mediaCollection(where: {internalName: "Pretty Green Logo"}) {\n    items {\n      mediaDesktop {\n        url\n      }\n      link {\n        url\n      }\n    }\n  }\n  contentContainerCollection(where: {internalName: "Infobar"}, limit: 1) {\n    items {\n      internalName\n      contentCollection {\n        items {\n          __typename\n          ... on Link {\n            ...Link\n          }\n        }\n      }\n      shortText\n      richText {\n        json\n      }\n    }\n  }\n}':
    types.GetNavigationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Link on Link {\n  externalName\n  internalName\n  url\n}',
): typeof import('./graphql').LinkFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Media on Media {\n  externalName\n  internalName\n  link {\n    ...Link\n  }\n  altText\n}',
): typeof import('./graphql').MediaFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment NavigationItem on NavigationItem {\n  externalName\n  internalName\n  mainLink {\n    ...Link\n  }\n  navigationLinksCollection(limit: 9) {\n    total\n    items {\n      ...Link\n    }\n  }\n  mediaCollection(limit: 9) {\n    total\n    items {\n      ...Media\n    }\n  }\n  colour {\n    internalName\n    colourHex\n  }\n}',
): typeof import('./graphql').NavigationItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetNavigation {\n  navigationCollection(\n    where: {OR: [{internalName: "Main Navigation Mobile"}, {internalName: "Main Navigation Desktop"}]}\n    limit: 2\n  ) {\n    items {\n      sys {\n        id\n      }\n      internalName\n      navColour {\n        colourHex\n      }\n      navigationItemsCollection(limit: 10) {\n        total\n        items {\n          ...NavigationItem\n          navigationItemsCollection(limit: 10) {\n            total\n            items {\n              ...NavigationItem\n            }\n          }\n        }\n      }\n    }\n  }\n  mediaCollection(where: {internalName: "Pretty Green Logo"}) {\n    items {\n      mediaDesktop {\n        url\n      }\n      link {\n        url\n      }\n    }\n  }\n  contentContainerCollection(where: {internalName: "Infobar"}, limit: 1) {\n    items {\n      internalName\n      contentCollection {\n        items {\n          __typename\n          ... on Link {\n            ...Link\n          }\n        }\n      }\n      shortText\n      richText {\n        json\n      }\n    }\n  }\n}',
): typeof import('./graphql').GetNavigationDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
