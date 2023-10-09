/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: string; output: string };
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: unknown; output: unknown };
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: unknown; output: unknown };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown };
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: unknown; output: unknown };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  mediaCollection: Maybe<MediaCollection>;
  videoMediaCollection: Maybe<VideoMediaCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsMediaCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsVideoMediaCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum AssetLinkingCollectionsVideoMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternamNameAsc = 'internamName_ASC',
  InternamNameDesc = 'internamName_DESC',
  LoopAsc = 'loop_ASC',
  LoopDesc = 'loop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPost = Entry & {
  contentCollection: Maybe<BlogPostContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  hero: Maybe<BlogPostHero>;
  internalName: Maybe<Scalars['String']['output']>;
  layout: Maybe<Scalars['JSON']['output']>;
  linkedFrom: Maybe<BlogPostLinkingCollections>;
  metadata: Maybe<Metadata>;
  relatedCollection: Maybe<BlogPostRelatedCollection>;
  style: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
  url: Maybe<Link>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BlogPostContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostHeroArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostLayoutArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostMetadataArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostRelatedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BlogPostRelatedFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostStyleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/blogPost) */
export type BlogPostUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

export type BlogPostCollection = {
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostContentCollection = {
  items: Array<Maybe<BlogPostContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostContentFilter = {
  AND: InputMaybe<Array<InputMaybe<BlogPostContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BlogPostContentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type BlogPostContentItem = Button | Media | SimpleCarousel | Text | VideoMedia;

export type BlogPostFilter = {
  AND: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  related: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  style_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<CfLinkNestedFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostHero = Media | VideoMedia;

export type BlogPostLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogPostLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlogPostLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlogPostOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlogPostRelatedCollection = {
  items: Array<Maybe<BlogPostRelatedItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostRelatedFilter = {
  AND: InputMaybe<Array<InputMaybe<BlogPostRelatedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BlogPostRelatedFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  related: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  style_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostRelatedItem = BlogPost | CustomPage;

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/button) */
export type Button = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  link: Maybe<Link>;
  linkedFrom: Maybe<ButtonLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/button) */
export type ButtonExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/button) */
export type ButtonInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/button) */
export type ButtonLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ButtonCollection = {
  items: Array<Maybe<Button>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ButtonFilter = {
  AND: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfLinkNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type ButtonLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  fullWidthImageCollection: Maybe<FullWidthImageCollection>;
};

export type ButtonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ButtonLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ButtonLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsFullWidthImageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ButtonLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ButtonLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ButtonLinkingCollectionsFullWidthImageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ButtonOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/carousel) */
export type Carousel = Entry & {
  collectionsCollection: Maybe<CarouselCollectionsCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<CarouselLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/carousel) */
export type CarouselCollectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CarouselCollectionsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CollectionFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/carousel) */
export type CarouselExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/carousel) */
export type CarouselInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CarouselCollection = {
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselCollectionsCollection = {
  items: Array<Maybe<Collection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CarouselCollectionsCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CarouselFilter = {
  AND: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  collections: InputMaybe<CfCollectionNestedFilter>;
  collectionsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CarouselLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CarouselLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum CarouselOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/collection) */
export type Collection = Entry & {
  collection: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<CollectionLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/collection) */
export type CollectionCollectionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/collection) */
export type CollectionExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/collection) */
export type CollectionInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/collection) */
export type CollectionLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectionCollection = {
  items: Array<Maybe<Collection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CollectionFilter = {
  AND: InputMaybe<Array<InputMaybe<CollectionFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CollectionFilter>>>;
  collection_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CollectionLinkingCollections = {
  carouselCollection: Maybe<CarouselCollection>;
  entryCollection: Maybe<EntryCollection>;
};

export type CollectionLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CollectionLinkingCollectionsCarouselCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CollectionLinkingCollectionsCarouselCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum CollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/color) */
export type Color = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ColorLinkingCollections>;
  sys: Sys;
  value: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/color) */
export type ColorExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/color) */
export type ColorInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/color) */
export type ColorLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/color) */
export type ColorValueArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ColorCollection = {
  items: Array<Maybe<Color>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ColorFilter = {
  AND: InputMaybe<Array<InputMaybe<ColorFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ColorFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ColorLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  fullWidthImageCollection: Maybe<FullWidthImageCollection>;
  navigationCollection: Maybe<NavigationCollection>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
};

export type ColorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ColorLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ColorLinkingCollectionsFullWidthImageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ColorLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ColorLinkingCollectionsNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ColorLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ColorLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ColorLinkingCollectionsFullWidthImageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ColorLinkingCollectionsNavigationCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ColorLinkingCollectionsNavigationItemCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ColorOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export type ContentfulMetadata = {
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPage = Entry & {
  contentCollection: Maybe<CustomPageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  hero: Maybe<CustomPageHero>;
  internalName: Maybe<Scalars['String']['output']>;
  layout: Maybe<Scalars['JSON']['output']>;
  linkedFrom: Maybe<CustomPageLinkingCollections>;
  metadata: Maybe<Metadata>;
  relatedCollection: Maybe<CustomPageRelatedCollection>;
  style: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
  url: Maybe<Link>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomPageContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageHeroArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageLayoutArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageMetadataArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageRelatedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomPageRelatedFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageStyleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/customPage) */
export type CustomPageUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

export type CustomPageCollection = {
  items: Array<Maybe<CustomPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomPageContentCollection = {
  items: Array<Maybe<CustomPageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomPageContentFilter = {
  AND: InputMaybe<Array<InputMaybe<CustomPageContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CustomPageContentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CustomPageContentItem = Button | Media | SimpleCarousel | Text | VideoMedia;

export type CustomPageFilter = {
  AND: InputMaybe<Array<InputMaybe<CustomPageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CustomPageFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  related: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  style_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<CfLinkNestedFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomPageHero = Media | VideoMedia;

export type CustomPageLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};

export type CustomPageLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CustomPageLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomPageLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CustomPageLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomPageLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum CustomPageLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum CustomPageOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CustomPageRelatedCollection = {
  items: Array<Maybe<CustomPageRelatedItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomPageRelatedFilter = {
  AND: InputMaybe<Array<InputMaybe<CustomPageRelatedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CustomPageRelatedFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  related: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  style_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomPageRelatedItem = BlogPost | CustomPage;

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type Footer = Entry & {
  contentfulMetadata: ContentfulMetadata;
  desktopNavigation: Maybe<Navigation>;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<FooterLinkingCollections>;
  mediaCollection: Maybe<FooterMediaCollection>;
  mobileNavigation: Maybe<Navigation>;
  socialLinksCollection: Maybe<FooterSocialLinksCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterDesktopNavigationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<NavigationFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterMediaCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterMobileNavigationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<NavigationFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/footer) */
export type FooterSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterSocialLinksCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MediaFilter>;
};

export type FooterCollection = {
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  desktopNavigation: InputMaybe<CfNavigationNestedFilter>;
  desktopNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media: InputMaybe<CfMediaNestedFilter>;
  mediaCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileNavigation: InputMaybe<CfNavigationNestedFilter>;
  mobileNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  socialLinks: InputMaybe<CfMediaNestedFilter>;
  socialLinksCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type FooterLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};

export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterMediaCollection = {
  items: Array<Maybe<Media>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum FooterOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type FooterSocialLinksCollection = {
  items: Array<Maybe<Media>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterSocialLinksCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImage = Entry & {
  button: Maybe<Button>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<FullWidthImageLinkingCollections>;
  media: Maybe<Media>;
  sys: Sys;
  textColour: Maybe<Color>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageButtonArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ButtonFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageMediaArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/fullWidthImage) */
export type FullWidthImageTextColourArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ColorFilter>;
};

export type FullWidthImageCollection = {
  items: Array<Maybe<FullWidthImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FullWidthImageFilter = {
  AND: InputMaybe<Array<InputMaybe<FullWidthImageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<FullWidthImageFilter>>>;
  button: InputMaybe<CfButtonNestedFilter>;
  button_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media: InputMaybe<CfMediaNestedFilter>;
  media_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  textColour: InputMaybe<CfColorNestedFilter>;
  textColour_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type FullWidthImageLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type FullWidthImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FullWidthImageLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FullWidthImageLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FullWidthImageLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum FullWidthImageOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type Header = Entry & {
  contentfulMetadata: ContentfulMetadata;
  desktopNavigation: Maybe<Navigation>;
  externalName: Maybe<Scalars['String']['output']>;
  infobar: Maybe<Text>;
  infobarNonUk: Maybe<Text>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<HeaderLinkingCollections>;
  logo: Maybe<Media>;
  mobileNavigation: Maybe<Navigation>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderDesktopNavigationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<NavigationFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderInfobarArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<TextFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderInfobarNonUkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<TextFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/header) */
export type HeaderMobileNavigationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<NavigationFilter>;
};

export type HeaderCollection = {
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  desktopNavigation: InputMaybe<CfNavigationNestedFilter>;
  desktopNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infobar: InputMaybe<CfTextNestedFilter>;
  infobarNonUk: InputMaybe<CfTextNestedFilter>;
  infobarNonUk_exists: InputMaybe<Scalars['Boolean']['input']>;
  infobar_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo: InputMaybe<CfMediaNestedFilter>;
  logo_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileNavigation: InputMaybe<CfNavigationNestedFilter>;
  mobileNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type HeaderLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  layoutCollection: Maybe<LayoutCollection>;
};

export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HeaderLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<HeaderLinkingCollectionsLayoutCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderLinkingCollectionsLayoutCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum HeaderOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithText = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ImageWithTextLinkingCollections>;
  media: Maybe<Media>;
  sys: Sys;
  text: Maybe<Text>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithTextExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithTextInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithTextLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithTextMediaArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/imageWithText) */
export type ImageWithTextTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<TextFilter>;
};

export type ImageWithTextCollection = {
  items: Array<Maybe<ImageWithText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageWithTextFilter = {
  AND: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media: InputMaybe<CfMediaNestedFilter>;
  media_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<CfTextNestedFilter>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWithTextLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  multiColumnContentCollection: Maybe<MultiColumnContentCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type ImageWithTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageWithTextLinkingCollectionsMultiColumnContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<
    Array<InputMaybe<ImageWithTextLinkingCollectionsMultiColumnContentCollectionOrder>>
  >;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageWithTextLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageWithTextLinkingCollectionsMultiColumnContentCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageWithTextLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageWithTextOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type Layout = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  footer: Maybe<Entry>;
  header: Maybe<Header>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LayoutLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type LayoutExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type LayoutFooterArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type LayoutHeaderArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<HeaderFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type LayoutInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/layout) */
export type LayoutLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutCollection = {
  items: Array<Maybe<Layout>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LayoutFilter = {
  AND: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footer_exists: InputMaybe<Scalars['Boolean']['input']>;
  header: InputMaybe<CfHeaderNestedFilter>;
  header_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type LayoutLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};

export type LayoutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LayoutOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type Link = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  follow: Maybe<Scalars['Boolean']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LinkLinkingCollections>;
  openInNewWindow: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  url: Maybe<Url>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkFollowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkOpenInNewWindowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/link) */
export type LinkUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<UrlFilter>;
};

export type LinkCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkFilter = {
  AND: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  follow: InputMaybe<Scalars['Boolean']['input']>;
  follow_exists: InputMaybe<Scalars['Boolean']['input']>;
  follow_not: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openInNewWindow: InputMaybe<Scalars['Boolean']['input']>;
  openInNewWindow_exists: InputMaybe<Scalars['Boolean']['input']>;
  openInNewWindow_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<CfUrlNestedFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  buttonCollection: Maybe<ButtonCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  listingPageCollection: Maybe<ListingPageCollection>;
  mediaCollection: Maybe<MediaCollection>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
  quickLinksCollection: Maybe<QuickLinksCollection>;
  videoMediaCollection: Maybe<VideoMediaCollection>;
};

export type LinkLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsButtonCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsListingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsListingPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsMediaCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsQuickLinksCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkLinkingCollectionsVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsVideoMediaCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LinkLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsButtonCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsListingPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsNavigationItemCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsQuickLinksCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkLinkingCollectionsVideoMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternamNameAsc = 'internamName_ASC',
  InternamNameDesc = 'internamName_DESC',
  LoopAsc = 'loop_ASC',
  LoopDesc = 'loop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum LinkOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  FollowAsc = 'follow_ASC',
  FollowDesc = 'follow_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OpenInNewWindowAsc = 'openInNewWindow_ASC',
  OpenInNewWindowDesc = 'openInNewWindow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPage = Entry & {
  bannersCollection: Maybe<ListingPageBannersCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ListingPageLinkingCollections>;
  metadata: Maybe<Metadata>;
  quickLinksCollection: Maybe<ListingPageQuickLinksCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageBannersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ListingPageBannersCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ListingPageBanerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageMetadataArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPage) */
export type ListingPageQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ListingPageQuickLinksCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBaner = Entry & {
  categoryId: Maybe<Entry>;
  content: Maybe<Entry>;
  contentfulMetadata: ContentfulMetadata;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ListingPageBanerLinkingCollections>;
  positionAlign: Maybe<Scalars['String']['output']>;
  positionRow: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerCategoryIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerContentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerPositionAlignArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerPositionRowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/listingPageBaner) */
export type ListingPageBanerTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ListingPageBanerCollection = {
  items: Array<Maybe<ListingPageBaner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ListingPageBanerFilter = {
  AND: InputMaybe<Array<InputMaybe<ListingPageBanerFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ListingPageBanerFilter>>>;
  categoryId_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionAlign: InputMaybe<Scalars['String']['input']>;
  positionAlign_contains: InputMaybe<Scalars['String']['input']>;
  positionAlign_exists: InputMaybe<Scalars['Boolean']['input']>;
  positionAlign_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionAlign_not: InputMaybe<Scalars['String']['input']>;
  positionAlign_not_contains: InputMaybe<Scalars['String']['input']>;
  positionAlign_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionRow: InputMaybe<Scalars['String']['input']>;
  positionRow_contains: InputMaybe<Scalars['String']['input']>;
  positionRow_exists: InputMaybe<Scalars['Boolean']['input']>;
  positionRow_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionRow_not: InputMaybe<Scalars['String']['input']>;
  positionRow_not_contains: InputMaybe<Scalars['String']['input']>;
  positionRow_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  type: InputMaybe<Scalars['String']['input']>;
  type_contains: InputMaybe<Scalars['String']['input']>;
  type_exists: InputMaybe<Scalars['Boolean']['input']>;
  type_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not: InputMaybe<Scalars['String']['input']>;
  type_not_contains: InputMaybe<Scalars['String']['input']>;
  type_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ListingPageBanerLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  listingPageCollection: Maybe<ListingPageCollection>;
};

export type ListingPageBanerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ListingPageBanerLinkingCollectionsListingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<
    Array<InputMaybe<ListingPageBanerLinkingCollectionsListingPageCollectionOrder>>
  >;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListingPageBanerLinkingCollectionsListingPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ListingPageBanerOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAlignAsc = 'positionAlign_ASC',
  PositionAlignDesc = 'positionAlign_DESC',
  PositionRowAsc = 'positionRow_ASC',
  PositionRowDesc = 'positionRow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type ListingPageBannersCollection = {
  items: Array<Maybe<ListingPageBaner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ListingPageBannersCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAlignAsc = 'positionAlign_ASC',
  PositionAlignDesc = 'positionAlign_DESC',
  PositionRowAsc = 'positionRow_ASC',
  PositionRowDesc = 'positionRow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type ListingPageCollection = {
  items: Array<Maybe<ListingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ListingPageFilter = {
  AND: InputMaybe<Array<InputMaybe<ListingPageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ListingPageFilter>>>;
  banners: InputMaybe<CfListingPageBanerNestedFilter>;
  bannersCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  quickLinks: InputMaybe<CfLinkNestedFilter>;
  quickLinksCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type ListingPageLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};

export type ListingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListingPageOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ListingPageQuickLinksCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ListingPageQuickLinksCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  FollowAsc = 'follow_ASC',
  FollowDesc = 'follow_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OpenInNewWindowAsc = 'openInNewWindow_ASC',
  OpenInNewWindowDesc = 'openInNewWindow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type Media = Entry & {
  altText: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  link: Maybe<Link>;
  linkedFrom: Maybe<MediaLinkingCollections>;
  mediaDesktop: Maybe<Asset>;
  mediaMobile: Maybe<Asset>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaAltTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaMediaDesktopArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/media) */
export type MediaMediaMobileArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaCollection = {
  items: Array<Maybe<Media>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MediaFilter = {
  AND: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  altText: InputMaybe<Scalars['String']['input']>;
  altText_contains: InputMaybe<Scalars['String']['input']>;
  altText_exists: InputMaybe<Scalars['Boolean']['input']>;
  altText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not: InputMaybe<Scalars['String']['input']>;
  altText_not_contains: InputMaybe<Scalars['String']['input']>;
  altText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfLinkNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  mediaDesktop_exists: InputMaybe<Scalars['Boolean']['input']>;
  mediaMobile_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type MediaLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  footerCollection: Maybe<FooterCollection>;
  fullWidthImageCollection: Maybe<FullWidthImageCollection>;
  headerCollection: Maybe<HeaderCollection>;
  imageWithTextCollection: Maybe<ImageWithTextCollection>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
};

export type MediaLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsFooterCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsFullWidthImageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsHeaderCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsImageWithTextCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MediaLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsFooterCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsFullWidthImageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsHeaderCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsImageWithTextCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaLinkingCollectionsNavigationItemCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MediaOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type Metadata = Entry & {
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  keywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom: Maybe<MetadataLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataKeywordsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/metadata) */
export type MetadataTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MetadataCollection = {
  items: Array<Maybe<Metadata>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetadataFilter = {
  AND: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MetadataLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  listingPageCollection: Maybe<ListingPageCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type MetadataLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MetadataLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MetadataLinkingCollectionsListingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsListingPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MetadataLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetadataLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MetadataLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MetadataLinkingCollectionsListingPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MetadataLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MetadataOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/multiColumnContent) */
export type MultiColumnContent = Entry & {
  contentCollection: Maybe<MultiColumnContentContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<MultiColumnContentLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/multiColumnContent) */
export type MultiColumnContentContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MultiColumnContentContentCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImageWithTextFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/multiColumnContent) */
export type MultiColumnContentExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/multiColumnContent) */
export type MultiColumnContentInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/multiColumnContent) */
export type MultiColumnContentLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MultiColumnContentCollection = {
  items: Array<Maybe<MultiColumnContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MultiColumnContentContentCollection = {
  items: Array<Maybe<ImageWithText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MultiColumnContentContentCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type MultiColumnContentFilter = {
  AND: InputMaybe<Array<InputMaybe<MultiColumnContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MultiColumnContentFilter>>>;
  content: InputMaybe<CfImageWithTextNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type MultiColumnContentLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type MultiColumnContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MultiColumnContentLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MultiColumnContentLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MultiColumnContentLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MultiColumnContentOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type Navigation = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NavigationLinkingCollections>;
  navColour: Maybe<Color>;
  navigationItemsCollection: Maybe<NavigationNavigationItemsCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type NavigationExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type NavigationInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type NavigationNavColourArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ColorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigation) */
export type NavigationNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationNavigationItemsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemFilter>;
};

export type NavigationCollection = {
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navColour: InputMaybe<CfColorNestedFilter>;
  navColour_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItems: InputMaybe<CfNavigationItemNestedFilter>;
  navigationItemsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItem = Entry & {
  colour: Maybe<Color>;
  contentCollection: Maybe<NavigationItemContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NavigationItemLinkingCollections>;
  mainLink: Maybe<Link>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemColourArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ColorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/navigationItem) */
export type NavigationItemMainLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

export type NavigationItemCollection = {
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationItemContentCollection = {
  items: Array<Maybe<NavigationItemContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationItemContentFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationItemContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationItemContentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type NavigationItemContentItem = Link | Media | NavigationItem;

export type NavigationItemFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  colour: InputMaybe<CfColorNestedFilter>;
  colour_exists: InputMaybe<Scalars['Boolean']['input']>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainLink: InputMaybe<CfLinkNestedFilter>;
  mainLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type NavigationItemLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  navigationCollection: Maybe<NavigationCollection>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
};

export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationItemLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationItemLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<
    Array<InputMaybe<NavigationItemLinkingCollectionsNavigationItemCollectionOrder>>
  >;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationItemLinkingCollectionsNavigationCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum NavigationItemLinkingCollectionsNavigationItemCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum NavigationItemOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type NavigationLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  footerCollection: Maybe<FooterCollection>;
  headerCollection: Maybe<HeaderCollection>;
};

export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsFooterCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsHeaderCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationLinkingCollectionsFooterCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum NavigationLinkingCollectionsHeaderCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type NavigationNavigationItemsCollection = {
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationNavigationItemsCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum NavigationOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type Page = Entry & {
  contentCollection: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  hero: Maybe<FullWidthImage>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PageLinkingCollections>;
  metadata: Maybe<Metadata>;
  sys: Sys;
  url: Maybe<Url>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageHeroArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<FullWidthImageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageMetadataArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/page) */
export type PageUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<UrlFilter>;
};

export type PageCollection = {
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentCollection = {
  items: Array<Maybe<PageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageContentFilter = {
  AND: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageContentItem = Carousel | FullWidthImage | ImageWithText | MultiColumnContent;

export type PageFilter = {
  AND: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageFilter>>>;
  content: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero: InputMaybe<CfFullWidthImageNestedFilter>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<CfUrlNestedFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Query = {
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  blogPost: Maybe<BlogPost>;
  blogPostCollection: Maybe<BlogPostCollection>;
  button: Maybe<Button>;
  buttonCollection: Maybe<ButtonCollection>;
  carousel: Maybe<Carousel>;
  carouselCollection: Maybe<CarouselCollection>;
  collection: Maybe<Collection>;
  collectionCollection: Maybe<CollectionCollection>;
  color: Maybe<Color>;
  colorCollection: Maybe<ColorCollection>;
  customPage: Maybe<CustomPage>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  footer: Maybe<Footer>;
  footerCollection: Maybe<FooterCollection>;
  fullWidthImage: Maybe<FullWidthImage>;
  fullWidthImageCollection: Maybe<FullWidthImageCollection>;
  header: Maybe<Header>;
  headerCollection: Maybe<HeaderCollection>;
  imageWithText: Maybe<ImageWithText>;
  imageWithTextCollection: Maybe<ImageWithTextCollection>;
  layout: Maybe<Layout>;
  layoutCollection: Maybe<LayoutCollection>;
  link: Maybe<Link>;
  linkCollection: Maybe<LinkCollection>;
  listingPage: Maybe<ListingPage>;
  listingPageBaner: Maybe<ListingPageBaner>;
  listingPageBanerCollection: Maybe<ListingPageBanerCollection>;
  listingPageCollection: Maybe<ListingPageCollection>;
  media: Maybe<Media>;
  mediaCollection: Maybe<MediaCollection>;
  metadata: Maybe<Metadata>;
  metadataCollection: Maybe<MetadataCollection>;
  multiColumnContent: Maybe<MultiColumnContent>;
  multiColumnContentCollection: Maybe<MultiColumnContentCollection>;
  navigation: Maybe<Navigation>;
  navigationCollection: Maybe<NavigationCollection>;
  navigationItem: Maybe<NavigationItem>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
  page: Maybe<Page>;
  pageCollection: Maybe<PageCollection>;
  quickLinks: Maybe<QuickLinks>;
  quickLinksCollection: Maybe<QuickLinksCollection>;
  simpleCarousel: Maybe<SimpleCarousel>;
  simpleCarouselCollection: Maybe<SimpleCarouselCollection>;
  text: Maybe<Text>;
  textCollection: Maybe<TextCollection>;
  url: Maybe<Url>;
  urlCollection: Maybe<UrlCollection>;
  videoMedia: Maybe<VideoMedia>;
  videoMediaCollection: Maybe<VideoMediaCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BlogPostFilter>;
};

export type QueryButtonArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ButtonFilter>;
};

export type QueryCarouselArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CarouselFilter>;
};

export type QueryCollectionArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CollectionFilter>;
};

export type QueryColorArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryColorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ColorOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ColorFilter>;
};

export type QueryCustomPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CustomPageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CustomPageFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EntryFilter>;
};

export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<FooterFilter>;
};

export type QueryFullWidthImageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FullWidthImageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<FullWidthImageFilter>;
};

export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HeaderFilter>;
};

export type QueryImageWithTextArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImageWithTextOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImageWithTextFilter>;
};

export type QueryLayoutArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LayoutOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LayoutFilter>;
};

export type QueryLinkArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LinkFilter>;
};

export type QueryListingPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryListingPageBanerArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryListingPageBanerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ListingPageBanerOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ListingPageBanerFilter>;
};

export type QueryListingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ListingPageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ListingPageFilter>;
};

export type QueryMediaArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MediaOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MediaFilter>;
};

export type QueryMetadataArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MetadataOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MetadataFilter>;
};

export type QueryMultiColumnContentArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMultiColumnContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MultiColumnContentOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MultiColumnContentFilter>;
};

export type QueryNavigationArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationFilter>;
};

export type QueryNavigationItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemFilter>;
};

export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageFilter>;
};

export type QueryQuickLinksArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<QuickLinksOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<QuickLinksFilter>;
};

export type QuerySimpleCarouselArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerySimpleCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SimpleCarouselOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SimpleCarouselFilter>;
};

export type QueryTextArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TextFilter>;
};

export type QueryUrlArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryUrlCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<UrlOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UrlFilter>;
};

export type QueryVideoMediaArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<VideoMediaOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<VideoMediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinks = Entry & {
  categoryId: Maybe<Entry>;
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkCollection: Maybe<QuickLinksLinkCollection>;
  linkedFrom: Maybe<QuickLinksLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinksCategoryIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinksExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinksInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinksLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<QuickLinksLinkCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/quickLinks) */
export type QuickLinksLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuickLinksCollection = {
  items: Array<Maybe<QuickLinks>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuickLinksFilter = {
  AND: InputMaybe<Array<InputMaybe<QuickLinksFilter>>>;
  OR: InputMaybe<Array<InputMaybe<QuickLinksFilter>>>;
  categoryId_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfLinkNestedFilter>;
  linkCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type QuickLinksLinkCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum QuickLinksLinkCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  FollowAsc = 'follow_ASC',
  FollowDesc = 'follow_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OpenInNewWindowAsc = 'openInNewWindow_ASC',
  OpenInNewWindowDesc = 'openInNewWindow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type QuickLinksLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};

export type QuickLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuickLinksOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarousel = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SimpleCarouselLinkingCollections>;
  products: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  xoWidget: Maybe<Entry>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarouselExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarouselInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarouselLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarouselProductsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/simpleCarousel) */
export type SimpleCarouselXoWidgetArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimpleCarouselCollection = {
  items: Array<Maybe<SimpleCarousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SimpleCarouselFilter = {
  AND: InputMaybe<Array<InputMaybe<SimpleCarouselFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SimpleCarouselFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  xoWidget_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimpleCarouselLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};

export type SimpleCarouselLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SimpleCarouselLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SimpleCarouselLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SimpleCarouselLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SimpleCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SimpleCarouselLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum SimpleCarouselLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum SimpleCarouselOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Sys = {
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/text) */
export type Text = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TextLinkingCollections>;
  longText: Maybe<TextLongText>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/text) */
export type TextExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/text) */
export type TextInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/text) */
export type TextLongTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TextCollection = {
  items: Array<Maybe<Text>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextFilter = {
  AND: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TextFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longText_contains: InputMaybe<Scalars['String']['input']>;
  longText_exists: InputMaybe<Scalars['Boolean']['input']>;
  longText_not_contains: InputMaybe<Scalars['String']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type TextLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  headerCollection: Maybe<HeaderCollection>;
  imageWithTextCollection: Maybe<ImageWithTextCollection>;
};

export type TextLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TextLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TextLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextLinkingCollectionsHeaderCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TextLinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextLinkingCollectionsImageWithTextCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum TextLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum TextLinkingCollectionsHeaderCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum TextLinkingCollectionsImageWithTextCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TextLongText = {
  json: Scalars['JSON']['output'];
  links: TextLongTextLinks;
};

export type TextLongTextAssets = {
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextLongTextEntries = {
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextLongTextLinks = {
  assets: TextLongTextAssets;
  entries: TextLongTextEntries;
  resources: TextLongTextResources;
};

export type TextLongTextResources = {
  block: Array<ResourceLink>;
};

export enum TextOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/url) */
export type Url = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName: Maybe<Scalars['String']['output']>;
  internalName: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<UrlLinkingCollections>;
  sys: Sys;
  value: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/url) */
export type UrlExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/url) */
export type UrlInternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/url) */
export type UrlLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/url) */
export type UrlValueArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type UrlCollection = {
  items: Array<Maybe<Url>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UrlFilter = {
  AND: InputMaybe<Array<InputMaybe<UrlFilter>>>;
  OR: InputMaybe<Array<InputMaybe<UrlFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UrlLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  linkCollection: Maybe<LinkCollection>;
  pageCollection: Maybe<PageCollection>;
};

export type UrlLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type UrlLinkingCollectionsLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<UrlLinkingCollectionsLinkCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type UrlLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<UrlLinkingCollectionsPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum UrlLinkingCollectionsLinkCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  FollowAsc = 'follow_ASC',
  FollowDesc = 'follow_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OpenInNewWindowAsc = 'openInNewWindow_ASC',
  OpenInNewWindowDesc = 'openInNewWindow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum UrlLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum UrlOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMedia = Entry & {
  altText: Maybe<Scalars['String']['output']>;
  autoplay: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  desktopPoster: Maybe<Asset>;
  desktopVideo: Maybe<Asset>;
  externalName: Maybe<Scalars['String']['output']>;
  internamName: Maybe<Scalars['String']['output']>;
  link: Maybe<Link>;
  linkedFrom: Maybe<VideoMediaLinkingCollections>;
  loop: Maybe<Scalars['Boolean']['output']>;
  mobilePoster: Maybe<Asset>;
  mobileVideo: Maybe<Asset>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaAltTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaAutoplayArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaDesktopPosterArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaDesktopVideoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaExternalNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaInternamNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaLoopArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaMobilePosterArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/tsre65mxrq21/content_types/videoMedia) */
export type VideoMediaMobileVideoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaCollection = {
  items: Array<Maybe<VideoMedia>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoMediaFilter = {
  AND: InputMaybe<Array<InputMaybe<VideoMediaFilter>>>;
  OR: InputMaybe<Array<InputMaybe<VideoMediaFilter>>>;
  altText: InputMaybe<Scalars['String']['input']>;
  altText_contains: InputMaybe<Scalars['String']['input']>;
  altText_exists: InputMaybe<Scalars['Boolean']['input']>;
  altText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not: InputMaybe<Scalars['String']['input']>;
  altText_not_contains: InputMaybe<Scalars['String']['input']>;
  altText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  autoplay: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  desktopPoster_exists: InputMaybe<Scalars['Boolean']['input']>;
  desktopVideo_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internamName: InputMaybe<Scalars['String']['input']>;
  internamName_contains: InputMaybe<Scalars['String']['input']>;
  internamName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internamName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internamName_not: InputMaybe<Scalars['String']['input']>;
  internamName_not_contains: InputMaybe<Scalars['String']['input']>;
  internamName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfLinkNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  loop: InputMaybe<Scalars['Boolean']['input']>;
  loop_exists: InputMaybe<Scalars['Boolean']['input']>;
  loop_not: InputMaybe<Scalars['Boolean']['input']>;
  mobilePoster_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileVideo_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type VideoMediaLinkingCollections = {
  blogPostCollection: Maybe<BlogPostCollection>;
  customPageCollection: Maybe<CustomPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};

export type VideoMediaLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<VideoMediaLinkingCollectionsBlogPostCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoMediaLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<VideoMediaLinkingCollectionsCustomPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoMediaLinkingCollectionsBlogPostCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum VideoMediaLinkingCollectionsCustomPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum VideoMediaOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternamNameAsc = 'internamName_ASC',
  InternamNameDesc = 'internamName_DESC',
  LoopAsc = 'loop_ASC',
  LoopDesc = 'loop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CfButtonNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfCollectionNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfCollectionNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfCollectionNestedFilter>>>;
  collection_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfColorNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfColorNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfColorNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFullWidthImageNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfFullWidthImageNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfFullWidthImageNestedFilter>>>;
  button_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  textColour_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfHeaderNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  desktopNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infobarNonUk_exists: InputMaybe<Scalars['Boolean']['input']>;
  infobar_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfImageWithTextNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfImageWithTextNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfImageWithTextNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  media_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfLinkNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  follow: InputMaybe<Scalars['Boolean']['input']>;
  follow_exists: InputMaybe<Scalars['Boolean']['input']>;
  follow_not: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openInNewWindow: InputMaybe<Scalars['Boolean']['input']>;
  openInNewWindow_exists: InputMaybe<Scalars['Boolean']['input']>;
  openInNewWindow_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfListingPageBanerNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfListingPageBanerNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfListingPageBanerNestedFilter>>>;
  categoryId_exists: InputMaybe<Scalars['Boolean']['input']>;
  content_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionAlign: InputMaybe<Scalars['String']['input']>;
  positionAlign_contains: InputMaybe<Scalars['String']['input']>;
  positionAlign_exists: InputMaybe<Scalars['Boolean']['input']>;
  positionAlign_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionAlign_not: InputMaybe<Scalars['String']['input']>;
  positionAlign_not_contains: InputMaybe<Scalars['String']['input']>;
  positionAlign_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionRow: InputMaybe<Scalars['String']['input']>;
  positionRow_contains: InputMaybe<Scalars['String']['input']>;
  positionRow_exists: InputMaybe<Scalars['Boolean']['input']>;
  positionRow_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  positionRow_not: InputMaybe<Scalars['String']['input']>;
  positionRow_not_contains: InputMaybe<Scalars['String']['input']>;
  positionRow_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  type: InputMaybe<Scalars['String']['input']>;
  type_contains: InputMaybe<Scalars['String']['input']>;
  type_exists: InputMaybe<Scalars['Boolean']['input']>;
  type_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not: InputMaybe<Scalars['String']['input']>;
  type_not_contains: InputMaybe<Scalars['String']['input']>;
  type_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfMediaNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMediaNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMediaNestedFilter>>>;
  altText: InputMaybe<Scalars['String']['input']>;
  altText_contains: InputMaybe<Scalars['String']['input']>;
  altText_exists: InputMaybe<Scalars['Boolean']['input']>;
  altText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not: InputMaybe<Scalars['String']['input']>;
  altText_not_contains: InputMaybe<Scalars['String']['input']>;
  altText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  mediaDesktop_exists: InputMaybe<Scalars['Boolean']['input']>;
  mediaMobile_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfMetadataNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMetadataNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMetadataNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfNavigationItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  colour_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfNavigationNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfNavigationNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfNavigationNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navColour_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfTextNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfTextNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfTextNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longText_contains: InputMaybe<Scalars['String']['input']>;
  longText_exists: InputMaybe<Scalars['Boolean']['input']>;
  longText_not_contains: InputMaybe<Scalars['String']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfUrlNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfUrlNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfUrlNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfrelatedMultiTypeNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfrelatedMultiTypeNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfrelatedMultiTypeNestedFilter>>>;
  contentCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  externalName: InputMaybe<Scalars['String']['input']>;
  externalName_contains: InputMaybe<Scalars['String']['input']>;
  externalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  externalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalName_not: InputMaybe<Scalars['String']['input']>;
  externalName_not_contains: InputMaybe<Scalars['String']['input']>;
  externalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hero_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName: InputMaybe<Scalars['String']['input']>;
  internalName_contains: InputMaybe<Scalars['String']['input']>;
  internalName_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains: InputMaybe<Scalars['String']['input']>;
  internalName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_exists: InputMaybe<Scalars['Boolean']['input']>;
  metadata_exists: InputMaybe<Scalars['Boolean']['input']>;
  relatedCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  style_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselFragment = {
  externalName: string | null;
  collectionsCollection: {
    items: Array<{ externalName: string | null; collection: Array<string | null> | null } | null>;
  } | null;
};

export type ColourFragment = { externalName: string | null; value: string | null };

export type FullWidthImageFragment = {
  externalName: string | null;
  textColour: { value: string | null } | null;
  button: {
    externalName: string | null;
    link: { url: { externalName: string | null; value: string | null } | null } | null;
  } | null;
  media: {
    externalName: string | null;
    mediaDesktop: { url: string | null } | null;
    mediaMobile: { url: string | null } | null;
  } | null;
};

export type ImageWithTextFragment = {
  externalName: string | null;
  text: { longText: { json: unknown } | null } | null;
  media: {
    mediaDesktop: { url: string | null } | null;
    mediaMobile: { url: string | null } | null;
  } | null;
};

export type LinkFragment = {
  externalName: string | null;
  openInNewWindow: boolean | null;
  follow: boolean | null;
  url: { externalName: string | null; value: string | null } | null;
};

export type MetadataFragment = {
  internalName: string | null;
  externalName: string | null;
  title: string | null;
  description: string | null;
  keywords: Array<string | null> | null;
};

export type MultiColumnContentFragment = {
  externalName: string | null;
  contentCollection: {
    items: Array<{
      externalName: string | null;
      text: { longText: { json: unknown } | null } | null;
      media: {
        mediaDesktop: { url: string | null } | null;
        mediaMobile: { url: string | null } | null;
      } | null;
    } | null>;
  } | null;
};

export type NavigationItemFragment = {
  externalName: string | null;
  mainLink: {
    externalName: string | null;
    openInNewWindow: boolean | null;
    follow: boolean | null;
    url: { externalName: string | null; value: string | null } | null;
  } | null;
  contentCollection: {
    items: Array<
      | {
          __typename: 'Link';
          externalName: string | null;
          openInNewWindow: boolean | null;
          follow: boolean | null;
          url: { externalName: string | null; value: string | null } | null;
        }
      | {
          __typename: 'Media';
          externalName: string | null;
          altText: string | null;
          mediaDesktop: { url: string | null } | null;
          mediaMobile: { url: string | null } | null;
        }
      | {
          __typename: 'NavigationItem';
          externalName: string | null;
          mainLink: {
            externalName: string | null;
            openInNewWindow: boolean | null;
            follow: boolean | null;
            url: { externalName: string | null; value: string | null } | null;
          } | null;
        }
      | null
    >;
  } | null;
  colour: { externalName: string | null; value: string | null } | null;
};

export type UrlFragment = { externalName: string | null; value: string | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never }>;

export type GetFooterQuery = {
  footer: {
    externalName: string | null;
    sys: { id: string };
    socialLinksCollection: {
      items: Array<{
        externalName: string | null;
        mediaDesktop: { url: string | null } | null;
        mediaMobile: { url: string | null } | null;
        link: {
          externalName: string | null;
          openInNewWindow: boolean | null;
          follow: boolean | null;
          url: { externalName: string | null; value: string | null } | null;
        } | null;
      } | null>;
    } | null;
    desktopNavigation: {
      externalName: string | null;
      navigationItemsCollection: {
        items: Array<{
          externalName: string | null;
          mainLink: {
            externalName: string | null;
            openInNewWindow: boolean | null;
            follow: boolean | null;
            url: { externalName: string | null; value: string | null } | null;
          } | null;
          contentCollection: {
            items: Array<
              | {
                  __typename: 'Link';
                  externalName: string | null;
                  openInNewWindow: boolean | null;
                  follow: boolean | null;
                  url: { externalName: string | null; value: string | null } | null;
                }
              | {
                  __typename: 'Media';
                  externalName: string | null;
                  altText: string | null;
                  mediaDesktop: { url: string | null } | null;
                  mediaMobile: { url: string | null } | null;
                }
              | {
                  __typename: 'NavigationItem';
                  externalName: string | null;
                  mainLink: {
                    externalName: string | null;
                    openInNewWindow: boolean | null;
                    follow: boolean | null;
                    url: { externalName: string | null; value: string | null } | null;
                  } | null;
                }
              | null
            >;
          } | null;
          colour: { externalName: string | null; value: string | null } | null;
        } | null>;
      } | null;
      navColour: { externalName: string | null; value: string | null } | null;
    } | null;
  } | null;
};

export type GetHeaderQueryVariables = Exact<{ [key: string]: never }>;

export type GetHeaderQuery = {
  header: {
    externalName: string | null;
    logo: {
      externalName: string | null;
      mediaDesktop: { url: string | null } | null;
      mediaMobile: { url: string | null } | null;
    } | null;
    desktopNavigation: {
      externalName: string | null;
      navigationItemsCollection: {
        items: Array<{
          externalName: string | null;
          mainLink: {
            externalName: string | null;
            openInNewWindow: boolean | null;
            follow: boolean | null;
            url: { externalName: string | null; value: string | null } | null;
          } | null;
          colour: { externalName: string | null; value: string | null } | null;
          contentCollection: {
            items: Array<
              | {
                  __typename: 'Link';
                  externalName: string | null;
                  openInNewWindow: boolean | null;
                  follow: boolean | null;
                  url: { externalName: string | null; value: string | null } | null;
                }
              | {
                  __typename: 'Media';
                  altText: string | null;
                  externalName: string | null;
                  mediaDesktop: { url: string | null } | null;
                  mediaMobile: { url: string | null } | null;
                }
              | {
                  __typename: 'NavigationItem';
                  externalName: string | null;
                  mainLink: {
                    externalName: string | null;
                    openInNewWindow: boolean | null;
                    follow: boolean | null;
                    url: { externalName: string | null; value: string | null } | null;
                  } | null;
                }
              | null
            >;
          } | null;
        } | null>;
      } | null;
    } | null;
    mobileNavigation: {
      externalName: string | null;
      navigationItemsCollection: {
        items: Array<{
          externalName: string | null;
          mainLink: {
            externalName: string | null;
            openInNewWindow: boolean | null;
            follow: boolean | null;
            url: { externalName: string | null; value: string | null } | null;
          } | null;
          colour: { externalName: string | null; value: string | null } | null;
          contentCollection: {
            items: Array<
              | {
                  __typename: 'Link';
                  externalName: string | null;
                  openInNewWindow: boolean | null;
                  follow: boolean | null;
                  url: { externalName: string | null; value: string | null } | null;
                }
              | {
                  __typename: 'Media';
                  altText: string | null;
                  externalName: string | null;
                  mediaDesktop: { url: string | null } | null;
                  mediaMobile: { url: string | null } | null;
                }
              | {
                  __typename: 'NavigationItem';
                  externalName: string | null;
                  mainLink: {
                    externalName: string | null;
                    openInNewWindow: boolean | null;
                    follow: boolean | null;
                    url: { externalName: string | null; value: string | null } | null;
                  } | null;
                }
              | null
            >;
          } | null;
        } | null>;
      } | null;
    } | null;
  } | null;
};

export type GetPageBySlugQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;

export type GetPageBySlugQuery = {
  pageCollection: {
    items: Array<{
      externalName: string | null;
      metadata: {
        internalName: string | null;
        externalName: string | null;
        title: string | null;
        description: string | null;
        keywords: Array<string | null> | null;
      } | null;
      url: { externalName: string | null; value: string | null } | null;
      hero: {
        externalName: string | null;
        textColour: { value: string | null } | null;
        button: {
          externalName: string | null;
          link: { url: { externalName: string | null; value: string | null } | null } | null;
        } | null;
        media: {
          externalName: string | null;
          mediaDesktop: { url: string | null } | null;
          mediaMobile: { url: string | null } | null;
        } | null;
      } | null;
      contentCollection: {
        items: Array<
          | {
              __typename: 'Carousel';
              externalName: string | null;
              collectionsCollection: {
                items: Array<{
                  externalName: string | null;
                  collection: Array<string | null> | null;
                } | null>;
              } | null;
            }
          | {
              __typename: 'FullWidthImage';
              externalName: string | null;
              textColour: { value: string | null } | null;
              button: {
                externalName: string | null;
                link: { url: { externalName: string | null; value: string | null } | null } | null;
              } | null;
              media: {
                externalName: string | null;
                mediaDesktop: { url: string | null } | null;
                mediaMobile: { url: string | null } | null;
              } | null;
            }
          | {
              __typename: 'ImageWithText';
              externalName: string | null;
              text: { longText: { json: unknown } | null } | null;
              media: {
                mediaDesktop: { url: string | null } | null;
                mediaMobile: { url: string | null } | null;
              } | null;
            }
          | {
              __typename: 'MultiColumnContent';
              externalName: string | null;
              contentCollection: {
                items: Array<{
                  externalName: string | null;
                  text: { longText: { json: unknown } | null } | null;
                  media: {
                    mediaDesktop: { url: string | null } | null;
                    mediaMobile: { url: string | null } | null;
                  } | null;
                } | null>;
              } | null;
            }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CarouselFragmentDoc = new TypedDocumentString(
  `
    fragment Carousel on Carousel {
  externalName
  collectionsCollection {
    items {
      externalName
      collection
    }
  }
}
    `,
  { fragmentName: 'Carousel' },
) as unknown as TypedDocumentString<CarouselFragment, unknown>;
export const UrlFragmentDoc = new TypedDocumentString(
  `
    fragment Url on Url {
  externalName
  value
}
    `,
  { fragmentName: 'Url' },
) as unknown as TypedDocumentString<UrlFragment, unknown>;
export const FullWidthImageFragmentDoc = new TypedDocumentString(
  `
    fragment FullWidthImage on FullWidthImage {
  externalName
  textColour {
    value
  }
  button {
    externalName
    link {
      url {
        ...Url
      }
    }
  }
  media {
    externalName
    mediaDesktop {
      url(transform: {width: 1920})
    }
    mediaMobile {
      url(transform: {width: 720})
    }
  }
}
    fragment Url on Url {
  externalName
  value
}`,
  { fragmentName: 'FullWidthImage' },
) as unknown as TypedDocumentString<FullWidthImageFragment, unknown>;
export const ImageWithTextFragmentDoc = new TypedDocumentString(
  `
    fragment ImageWithText on ImageWithText {
  externalName
  text {
    longText {
      json
    }
  }
  media {
    mediaDesktop {
      url(transform: {width: 1440})
    }
    mediaMobile {
      url(transform: {width: 720})
    }
  }
}
    `,
  { fragmentName: 'ImageWithText' },
) as unknown as TypedDocumentString<ImageWithTextFragment, unknown>;
export const MetadataFragmentDoc = new TypedDocumentString(
  `
    fragment Metadata on Metadata {
  internalName
  externalName
  title
  description
  keywords
}
    `,
  { fragmentName: 'Metadata' },
) as unknown as TypedDocumentString<MetadataFragment, unknown>;
export const MultiColumnContentFragmentDoc = new TypedDocumentString(
  `
    fragment MultiColumnContent on MultiColumnContent {
  externalName
  contentCollection {
    items {
      externalName
      text {
        longText {
          json
        }
      }
      media {
        mediaDesktop {
          url(transform: {width: 1440})
        }
        mediaMobile {
          url(transform: {width: 720})
        }
      }
    }
  }
}
    `,
  { fragmentName: 'MultiColumnContent' },
) as unknown as TypedDocumentString<MultiColumnContentFragment, unknown>;
export const LinkFragmentDoc = new TypedDocumentString(
  `
    fragment Link on Link {
  externalName
  openInNewWindow
  follow
  url {
    ...Url
  }
}
    fragment Url on Url {
  externalName
  value
}`,
  { fragmentName: 'Link' },
) as unknown as TypedDocumentString<LinkFragment, unknown>;
export const ColourFragmentDoc = new TypedDocumentString(
  `
    fragment Colour on Color {
  externalName
  value
}
    `,
  { fragmentName: 'Colour' },
) as unknown as TypedDocumentString<ColourFragment, unknown>;
export const NavigationItemFragmentDoc = new TypedDocumentString(
  `
    fragment NavigationItem on NavigationItem {
  externalName
  mainLink {
    ...Link
  }
  contentCollection {
    items {
      __typename
      ... on Link {
        ...Link
      }
      ... on Media {
        externalName
        mediaDesktop {
          url(transform: {width: 720})
        }
        mediaMobile {
          url(transform: {width: 360})
        }
        altText
      }
      ... on NavigationItem {
        externalName
        mainLink {
          ...Link
        }
      }
    }
  }
  colour {
    ...Colour
  }
}
    fragment Colour on Color {
  externalName
  value
}
fragment Link on Link {
  externalName
  openInNewWindow
  follow
  url {
    ...Url
  }
}
fragment Url on Url {
  externalName
  value
}`,
  { fragmentName: 'NavigationItem' },
) as unknown as TypedDocumentString<NavigationItemFragment, unknown>;
export const GetFooterDocument = new TypedDocumentString(`
    query getFooter {
  footer(id: "PDtyHk4KiFOlReQj3sAFu") {
    sys {
      id
    }
    externalName
    socialLinksCollection(limit: 10) {
      items {
        externalName
        mediaDesktop {
          url
        }
        mediaMobile {
          url
        }
        link {
          ...Link
        }
      }
    }
    desktopNavigation {
      externalName
      navigationItemsCollection(limit: 10) {
        items {
          ...NavigationItem
        }
      }
      navColour {
        ...Colour
      }
    }
  }
}
    fragment Colour on Color {
  externalName
  value
}
fragment Link on Link {
  externalName
  openInNewWindow
  follow
  url {
    ...Url
  }
}
fragment NavigationItem on NavigationItem {
  externalName
  mainLink {
    ...Link
  }
  contentCollection {
    items {
      __typename
      ... on Link {
        ...Link
      }
      ... on Media {
        externalName
        mediaDesktop {
          url(transform: {width: 720})
        }
        mediaMobile {
          url(transform: {width: 360})
        }
        altText
      }
      ... on NavigationItem {
        externalName
        mainLink {
          ...Link
        }
      }
    }
  }
  colour {
    ...Colour
  }
}
fragment Url on Url {
  externalName
  value
}`) as unknown as TypedDocumentString<GetFooterQuery, GetFooterQueryVariables>;
export const GetHeaderDocument = new TypedDocumentString(`
    query GetHeader {
  header(id: "2bgw5whF1epZAKJoOUmMOU") {
    externalName
    logo {
      externalName
      mediaDesktop {
        url
      }
      mediaMobile {
        url
      }
    }
    desktopNavigation {
      externalName
      navigationItemsCollection(limit: 10) {
        items {
          externalName
          mainLink {
            ...Link
          }
          colour {
            ...Colour
          }
          contentCollection {
            items {
              __typename
              ... on Link {
                ...Link
              }
              ... on Media {
                altText
                externalName
                mediaDesktop {
                  url(transform: {width: 720})
                }
                mediaMobile {
                  url(transform: {width: 320})
                }
              }
              ... on NavigationItem {
                externalName
                mainLink {
                  ...Link
                }
              }
            }
          }
        }
      }
    }
    mobileNavigation {
      externalName
      navigationItemsCollection(limit: 10) {
        items {
          externalName
          mainLink {
            ...Link
          }
          colour {
            ...Colour
          }
          contentCollection {
            items {
              __typename
              ... on Link {
                ...Link
              }
              ... on Media {
                altText
                externalName
                mediaDesktop {
                  url
                }
                mediaMobile {
                  url
                }
              }
              ... on NavigationItem {
                externalName
                mainLink {
                  ...Link
                }
              }
            }
          }
        }
      }
    }
  }
}
    fragment Colour on Color {
  externalName
  value
}
fragment Link on Link {
  externalName
  openInNewWindow
  follow
  url {
    ...Url
  }
}
fragment Url on Url {
  externalName
  value
}`) as unknown as TypedDocumentString<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetPageBySlugDocument = new TypedDocumentString(`
    query GetPageBySlug($path: String!) {
  pageCollection(where: {url: {value: $path}}, limit: 1) {
    items {
      externalName
      metadata {
        ...Metadata
      }
      url {
        ...Url
      }
      hero {
        ...FullWidthImage
      }
      contentCollection(limit: 10) {
        items {
          __typename
          ... on Carousel {
            ...Carousel
          }
          ... on FullWidthImage {
            ...FullWidthImage
          }
          ... on ImageWithText {
            ...ImageWithText
          }
          ... on MultiColumnContent {
            ...MultiColumnContent
          }
        }
      }
    }
  }
}
    fragment Carousel on Carousel {
  externalName
  collectionsCollection {
    items {
      externalName
      collection
    }
  }
}
fragment FullWidthImage on FullWidthImage {
  externalName
  textColour {
    value
  }
  button {
    externalName
    link {
      url {
        ...Url
      }
    }
  }
  media {
    externalName
    mediaDesktop {
      url(transform: {width: 1920})
    }
    mediaMobile {
      url(transform: {width: 720})
    }
  }
}
fragment ImageWithText on ImageWithText {
  externalName
  text {
    longText {
      json
    }
  }
  media {
    mediaDesktop {
      url(transform: {width: 1440})
    }
    mediaMobile {
      url(transform: {width: 720})
    }
  }
}
fragment Metadata on Metadata {
  internalName
  externalName
  title
  description
  keywords
}
fragment MultiColumnContent on MultiColumnContent {
  externalName
  contentCollection {
    items {
      externalName
      text {
        longText {
          json
        }
      }
      media {
        mediaDesktop {
          url(transform: {width: 1440})
        }
        mediaMobile {
          url(transform: {width: 720})
        }
      }
    }
  }
}
fragment Url on Url {
  externalName
  value
}`) as unknown as TypedDocumentString<GetPageBySlugQuery, GetPageBySlugQueryVariables>;
