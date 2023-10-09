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
  'fragment Carousel on Carousel {\n  externalName\n  collectionsCollection {\n    items {\n      externalName\n      collection\n    }\n  }\n}':
    types.CarouselFragmentDoc,
  'fragment Colour on Color {\n  externalName\n  value\n}': types.ColourFragmentDoc,
  'fragment FullWidthImage on FullWidthImage {\n  externalName\n  textColour {\n    value\n  }\n  button {\n    externalName\n    link {\n      url {\n        ...Url\n      }\n    }\n  }\n  media {\n    externalName\n    mediaDesktop {\n      url(transform: {width: 1920})\n    }\n    mediaMobile {\n      url(transform: {width: 720})\n    }\n  }\n}':
    types.FullWidthImageFragmentDoc,
  'fragment ImageWithText on ImageWithText {\n  externalName\n  text {\n    longText {\n      json\n    }\n  }\n  media {\n    mediaDesktop {\n      url(transform: {width: 1440})\n    }\n    mediaMobile {\n      url(transform: {width: 720})\n    }\n  }\n}':
    types.ImageWithTextFragmentDoc,
  'fragment Link on Link {\n  externalName\n  openInNewWindow\n  follow\n  url {\n    ...Url\n  }\n}':
    types.LinkFragmentDoc,
  'fragment Metadata on Metadata {\n  internalName\n  externalName\n  title\n  description\n  keywords\n}':
    types.MetadataFragmentDoc,
  'fragment MultiColumnContent on MultiColumnContent {\n  externalName\n  contentCollection {\n    items {\n      externalName\n      text {\n        longText {\n          json\n        }\n      }\n      media {\n        mediaDesktop {\n          url(transform: {width: 1440})\n        }\n        mediaMobile {\n          url(transform: {width: 720})\n        }\n      }\n    }\n  }\n}':
    types.MultiColumnContentFragmentDoc,
  'fragment Url on Url {\n  externalName\n  value\n}': types.UrlFragmentDoc,
  'query getFooter {\n  footer(id: "PDtyHk4KiFOlReQj3sAFu") {\n    sys {\n      id\n    }\n    externalName\n    socialLinksCollection(limit: 10) {\n      items {\n        externalName\n        mediaDesktop {\n          url\n        }\n        mediaMobile {\n          url\n        }\n        link {\n          ...Link\n        }\n      }\n    }\n    desktopNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                externalName\n                mediaDesktop {\n                  url(transform: {width: 720})\n                }\n                mediaMobile {\n                  url(transform: {width: 360})\n                }\n                altText\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n          colour {\n            ...Colour\n          }\n        }\n      }\n      navColour {\n        ...Colour\n      }\n    }\n  }\n}':
    types.GetFooterDocument,
  'query GetHeader {\n  header(id: "2bgw5whF1epZAKJoOUmMOU") {\n    externalName\n    logo {\n      externalName\n      mediaDesktop {\n        url\n      }\n      mediaMobile {\n        url\n      }\n    }\n    desktopNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          colour {\n            ...Colour\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                altText\n                externalName\n                mediaDesktop {\n                  url(transform: {width: 720})\n                }\n                mediaMobile {\n                  url(transform: {width: 320})\n                }\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    mobileNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          colour {\n            ...Colour\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                altText\n                externalName\n                mediaDesktop {\n                  url\n                }\n                mediaMobile {\n                  url\n                }\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetHeaderDocument,
  'query GetPageBySlug($path: String!) {\n  pageCollection(where: {url: {value: $path}}, limit: 1) {\n    items {\n      externalName\n      metadata {\n        ...Metadata\n      }\n      url {\n        ...Url\n      }\n      hero {\n        ...FullWidthImage\n      }\n      contentCollection(limit: 10) {\n        items {\n          __typename\n          ... on Carousel {\n            ...Carousel\n          }\n          ... on FullWidthImage {\n            ...FullWidthImage\n          }\n          ... on ImageWithText {\n            ...ImageWithText\n          }\n          ... on MultiColumnContent {\n            ...MultiColumnContent\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetPageBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Carousel on Carousel {\n  externalName\n  collectionsCollection {\n    items {\n      externalName\n      collection\n    }\n  }\n}',
): typeof import('./graphql').CarouselFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Colour on Color {\n  externalName\n  value\n}',
): typeof import('./graphql').ColourFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment FullWidthImage on FullWidthImage {\n  externalName\n  textColour {\n    value\n  }\n  button {\n    externalName\n    link {\n      url {\n        ...Url\n      }\n    }\n  }\n  media {\n    externalName\n    mediaDesktop {\n      url(transform: {width: 1920})\n    }\n    mediaMobile {\n      url(transform: {width: 720})\n    }\n  }\n}',
): typeof import('./graphql').FullWidthImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment ImageWithText on ImageWithText {\n  externalName\n  text {\n    longText {\n      json\n    }\n  }\n  media {\n    mediaDesktop {\n      url(transform: {width: 1440})\n    }\n    mediaMobile {\n      url(transform: {width: 720})\n    }\n  }\n}',
): typeof import('./graphql').ImageWithTextFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Link on Link {\n  externalName\n  openInNewWindow\n  follow\n  url {\n    ...Url\n  }\n}',
): typeof import('./graphql').LinkFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Metadata on Metadata {\n  internalName\n  externalName\n  title\n  description\n  keywords\n}',
): typeof import('./graphql').MetadataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment MultiColumnContent on MultiColumnContent {\n  externalName\n  contentCollection {\n    items {\n      externalName\n      text {\n        longText {\n          json\n        }\n      }\n      media {\n        mediaDesktop {\n          url(transform: {width: 1440})\n        }\n        mediaMobile {\n          url(transform: {width: 720})\n        }\n      }\n    }\n  }\n}',
): typeof import('./graphql').MultiColumnContentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment Url on Url {\n  externalName\n  value\n}',
): typeof import('./graphql').UrlFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getFooter {\n  footer(id: "PDtyHk4KiFOlReQj3sAFu") {\n    sys {\n      id\n    }\n    externalName\n    socialLinksCollection(limit: 10) {\n      items {\n        externalName\n        mediaDesktop {\n          url\n        }\n        mediaMobile {\n          url\n        }\n        link {\n          ...Link\n        }\n      }\n    }\n    desktopNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                externalName\n                mediaDesktop {\n                  url(transform: {width: 720})\n                }\n                mediaMobile {\n                  url(transform: {width: 360})\n                }\n                altText\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n          colour {\n            ...Colour\n          }\n        }\n      }\n      navColour {\n        ...Colour\n      }\n    }\n  }\n}',
): typeof import('./graphql').GetFooterDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetHeader {\n  header(id: "2bgw5whF1epZAKJoOUmMOU") {\n    externalName\n    logo {\n      externalName\n      mediaDesktop {\n        url\n      }\n      mediaMobile {\n        url\n      }\n    }\n    desktopNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          colour {\n            ...Colour\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                altText\n                externalName\n                mediaDesktop {\n                  url(transform: {width: 720})\n                }\n                mediaMobile {\n                  url(transform: {width: 320})\n                }\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    mobileNavigation {\n      externalName\n      navigationItemsCollection(limit: 10) {\n        items {\n          externalName\n          mainLink {\n            ...Link\n          }\n          colour {\n            ...Colour\n          }\n          contentCollection {\n            items {\n              __typename\n              ... on Link {\n                ...Link\n              }\n              ... on Media {\n                altText\n                externalName\n                mediaDesktop {\n                  url\n                }\n                mediaMobile {\n                  url\n                }\n              }\n              ... on NavigationItem {\n                externalName\n                mainLink {\n                  ...Link\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import('./graphql').GetHeaderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetPageBySlug($path: String!) {\n  pageCollection(where: {url: {value: $path}}, limit: 1) {\n    items {\n      externalName\n      metadata {\n        ...Metadata\n      }\n      url {\n        ...Url\n      }\n      hero {\n        ...FullWidthImage\n      }\n      contentCollection(limit: 10) {\n        items {\n          __typename\n          ... on Carousel {\n            ...Carousel\n          }\n          ... on FullWidthImage {\n            ...FullWidthImage\n          }\n          ... on ImageWithText {\n            ...ImageWithText\n          }\n          ... on MultiColumnContent {\n            ...MultiColumnContent\n          }\n        }\n      }\n    }\n  }\n}',
): typeof import('./graphql').GetPageBySlugDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
