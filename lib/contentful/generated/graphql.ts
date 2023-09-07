/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: string;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: unknown;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: unknown;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: unknown;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  mediaCollection?: Maybe<MediaCollection>;
  metadataCollection?: Maybe<MetadataCollection>;
  staticMediaCollection?: Maybe<StaticMediaCollection>;
  videoMediaCollection?: Maybe<VideoMediaCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsMetadataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsStaticMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsStaticMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsVideoMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum AssetLinkingCollectionsMetadataCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ViewportAsc = 'viewport_ASC',
  ViewportDesc = 'viewport_DESC',
}

export enum AssetLinkingCollectionsStaticMediaCollectionOrder {
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
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPost = Entry & {
  contentCollection?: Maybe<BlogPostContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  hero?: Maybe<BlogPostHero>;
  internalName?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  metadata?: Maybe<Metadata>;
  relatedCollection?: Maybe<BlogPostRelatedCollection>;
  style?: Maybe<Scalars['JSON']>;
  sys: Sys;
  url?: Maybe<Link>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostHeroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostRelatedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostRelatedFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/blogPost) */
export type BlogPostUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

export type BlogPostCollection = {
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostContentCollection = {
  items: Array<Maybe<BlogPostContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BlogPostContentItem =
  | Button
  | Iframe
  | SimpleCarousel
  | StaticMedia
  | Text
  | VideoMedia;

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  related?: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists?: InputMaybe<Scalars['Boolean']>;
  style_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<CfLinkNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlogPostHero = StaticMedia | VideoMedia;

export type BlogPostLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BlogPostLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostRelatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostRelatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostRelatedFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  related?: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists?: InputMaybe<Scalars['Boolean']>;
  style_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlogPostRelatedItem = BlogPost | CustomPage;

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/button) */
export type Button = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/button) */
export type ButtonExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/button) */
export type ButtonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/button) */
export type ButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonCollection = {
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type ButtonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ButtonLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsContentContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ButtonLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum ButtonLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/carousel) */
export type Carousel = Entry & {
  collectionCollection?: Maybe<CarouselCollectionCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CarouselLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/carousel) */
export type CarouselCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselCollectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentContainerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/carousel) */
export type CarouselExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/carousel) */
export type CarouselInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CarouselCollection = {
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CarouselCollectionCollection = {
  items: Array<Maybe<ContentContainer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CarouselCollectionCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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
  AND?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  collection?: InputMaybe<CfContentContainerNestedFilter>;
  collectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CarouselLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CarouselLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/categoryId) */
export type CategoryId = Entry & {
  categoryId?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CategoryIdLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/categoryId) */
export type CategoryIdCategoryIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/categoryId) */
export type CategoryIdInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/categoryId) */
export type CategoryIdLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryIdCollection = {
  items: Array<Maybe<CategoryId>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CategoryIdFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryIdFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryIdFilter>>>;
  categoryId?: InputMaybe<Scalars['String']>;
  categoryId_contains?: InputMaybe<Scalars['String']>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  categoryId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryId_not?: InputMaybe<Scalars['String']>;
  categoryId_not_contains?: InputMaybe<Scalars['String']>;
  categoryId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryIdLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  listingPageBanerCollection?: Maybe<ListingPageBanerCollection>;
  quickLinksCollection?: Maybe<QuickLinksCollection>;
};

export type CategoryIdLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CategoryIdLinkingCollectionsListingPageBanerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<CategoryIdLinkingCollectionsListingPageBanerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CategoryIdLinkingCollectionsQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CategoryIdLinkingCollectionsQuickLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CategoryIdLinkingCollectionsListingPageBanerCollectionOrder {
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

export enum CategoryIdLinkingCollectionsQuickLinksCollectionOrder {
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

export enum CategoryIdOrder {
  CategoryIdAsc = 'categoryId_ASC',
  CategoryIdDesc = 'categoryId_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainer = Entry & {
  contentCollection?: Maybe<ContentContainerContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ContentContainerLinkingCollections>;
  richText?: Maybe<ContentContainerRichText>;
  shortText?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentContainerContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerRichTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/contentContainer) */
export type ContentContainerShortTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentContainerCollection = {
  items: Array<Maybe<ContentContainer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentContainerContentCollection = {
  items: Array<Maybe<ContentContainerContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentContainerContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentContainerContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentContainerContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentContainerContentItem = Button | InputField | Link | Media | Navigation | Product;

export type ContentContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentContainerFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  richText_contains?: InputMaybe<Scalars['String']>;
  richText_exists?: InputMaybe<Scalars['Boolean']>;
  richText_not_contains?: InputMaybe<Scalars['String']>;
  shortText?: InputMaybe<Scalars['String']>;
  shortText_contains?: InputMaybe<Scalars['String']>;
  shortText_exists?: InputMaybe<Scalars['Boolean']>;
  shortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortText_not?: InputMaybe<Scalars['String']>;
  shortText_not_contains?: InputMaybe<Scalars['String']>;
  shortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentContainerLinkingCollections = {
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  fullWidthImageCollection?: Maybe<FullWidthImageCollection>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  listingPageBanerCollection?: Maybe<ListingPageBanerCollection>;
  multiColumnContentCollection?: Maybe<MultiColumnContentCollection>;
};

export type ContentContainerLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentContainerLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentContainerLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentContainerLinkingCollectionsFullWidthImageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentContainerLinkingCollectionsImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentContainerLinkingCollectionsImageWithTextCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentContainerLinkingCollectionsListingPageBanerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentContainerLinkingCollectionsListingPageBanerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentContainerLinkingCollectionsMultiColumnContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentContainerLinkingCollectionsMultiColumnContentCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentContainerLinkingCollectionsCarouselCollectionOrder {
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

export enum ContentContainerLinkingCollectionsFullWidthImageCollectionOrder {
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

export enum ContentContainerLinkingCollectionsImageWithTextCollectionOrder {
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
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

export enum ContentContainerLinkingCollectionsListingPageBanerCollectionOrder {
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

export enum ContentContainerLinkingCollectionsMultiColumnContentCollectionOrder {
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

export enum ContentContainerOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentContainerRichText = {
  json: Scalars['JSON'];
  links: ContentContainerRichTextLinks;
};

export type ContentContainerRichTextAssets = {
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentContainerRichTextEntries = {
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentContainerRichTextLinks = {
  assets: ContentContainerRichTextAssets;
  entries: ContentContainerRichTextEntries;
  resources: ContentContainerRichTextResources;
};

export type ContentContainerRichTextResources = {
  block: Array<ResourceLink>;
};

export type ContentfulMetadata = {
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPage = Entry & {
  contentCollection?: Maybe<CustomPageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  hero?: Maybe<CustomPageHero>;
  internalName?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  linkedFrom?: Maybe<CustomPageLinkingCollections>;
  metadata?: Maybe<Metadata>;
  relatedCollection?: Maybe<CustomPageRelatedCollection>;
  style?: Maybe<Scalars['JSON']>;
  sys: Sys;
  url?: Maybe<Link>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomPageContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageHeroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MetadataFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageRelatedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomPageRelatedFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/customPage) */
export type CustomPageUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

export type CustomPageCollection = {
  items: Array<Maybe<CustomPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CustomPageContentCollection = {
  items: Array<Maybe<CustomPageContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CustomPageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomPageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomPageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CustomPageContentItem =
  | Button
  | Iframe
  | SimpleCarousel
  | StaticMedia
  | Text
  | VideoMedia;

export type CustomPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomPageFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<CfMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  related?: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists?: InputMaybe<Scalars['Boolean']>;
  style_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<CfLinkNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CustomPageHero = StaticMedia | VideoMedia;

export type CustomPageLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type CustomPageLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CustomPageLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CustomPageLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CustomPageLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CustomPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CustomPageRelatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomPageRelatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomPageRelatedFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  related?: InputMaybe<CfrelatedMultiTypeNestedFilter>;
  relatedCollection_exists?: InputMaybe<Scalars['Boolean']>;
  style_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CustomPageRelatedItem = BlogPost | CustomPage;

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImage = Entry & {
  content?: Maybe<ContentContainer>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FullWidthImageLinkingCollections>;
  sys: Sys;
  textColour?: Maybe<TextColour>;
  textPosition?: Maybe<TextPosition>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImageContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ContentContainerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImageTextColourArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextColourFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/fullWidthImage) */
export type FullWidthImageTextPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextPositionFilter>;
};

export type FullWidthImageCollection = {
  items: Array<Maybe<FullWidthImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FullWidthImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<FullWidthImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FullWidthImageFilter>>>;
  content?: InputMaybe<CfContentContainerNestedFilter>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  textColour?: InputMaybe<CfTextColourNestedFilter>;
  textColour_exists?: InputMaybe<Scalars['Boolean']>;
  textPosition?: InputMaybe<CfTextPositionNestedFilter>;
  textPosition_exists?: InputMaybe<Scalars['Boolean']>;
};

export type FullWidthImageLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type FullWidthImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FullWidthImageLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FullWidthImageLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FullWidthImageLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/iframe) */
export type Iframe = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IframeLinkingCollections>;
  script?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/iframe) */
export type IframeExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/iframe) */
export type IframeInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/iframe) */
export type IframeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/iframe) */
export type IframeScriptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IframeCollection = {
  items: Array<Maybe<Iframe>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IframeFilter = {
  AND?: InputMaybe<Array<InputMaybe<IframeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IframeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  script?: InputMaybe<Scalars['String']>;
  script_contains?: InputMaybe<Scalars['String']>;
  script_exists?: InputMaybe<Scalars['Boolean']>;
  script_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  script_not?: InputMaybe<Scalars['String']>;
  script_not_contains?: InputMaybe<Scalars['String']>;
  script_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type IframeLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type IframeLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IframeLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type IframeLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IframeLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type IframeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IframeLinkingCollectionsBlogPostCollectionOrder {
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

export enum IframeLinkingCollectionsCustomPageCollectionOrder {
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

export enum IframeOrder {
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
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Image with text on the right ot left component [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/imageWithText) */
export type ImageWithText = Entry & {
  content?: Maybe<ContentContainer>;
  contentfulMetadata: ContentfulMetadata;
  imagePosition?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ImageWithTextLinkingCollections>;
  sys: Sys;
};

/** Image with text on the right ot left component [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/imageWithText) */
export type ImageWithTextContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ContentContainerFilter>;
};

/** Image with text on the right ot left component [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/imageWithText) */
export type ImageWithTextImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Image with text on the right ot left component [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/imageWithText) */
export type ImageWithTextInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Image with text on the right ot left component [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/imageWithText) */
export type ImageWithTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageWithTextCollection = {
  items: Array<Maybe<ImageWithText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageWithTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageWithTextFilter>>>;
  content?: InputMaybe<CfContentContainerNestedFilter>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageWithTextLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ImageWithTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageWithTextLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ImageWithTextLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type Infobar = Entry & {
  content?: Maybe<InfobarContent>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars['String']>;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<InfobarLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type InfobarContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type InfobarCountryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type InfobarExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type InfobarInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/infobar) */
export type InfobarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InfobarCollection = {
  items: Array<Maybe<Infobar>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InfobarContent = {
  json: Scalars['JSON'];
  links: InfobarContentLinks;
};

export type InfobarContentAssets = {
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InfobarContentEntries = {
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InfobarContentLinks = {
  assets: InfobarContentAssets;
  entries: InfobarContentEntries;
  resources: InfobarContentResources;
};

export type InfobarContentResources = {
  block: Array<ResourceLink>;
};

export type InfobarFilter = {
  AND?: InputMaybe<Array<InputMaybe<InfobarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InfobarFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']>;
  country_contains?: InputMaybe<Scalars['String']>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_not?: InputMaybe<Scalars['String']>;
  country_not_contains?: InputMaybe<Scalars['String']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type InfobarLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
};

export type InfobarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InfobarOrder {
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/inputField) */
export type InputField = Entry & {
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<InputFieldDescription>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<InputFieldLinkingCollections>;
  placeholderText?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/inputField) */
export type InputFieldDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/inputField) */
export type InputFieldInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/inputField) */
export type InputFieldLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/inputField) */
export type InputFieldPlaceholderTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type InputFieldCollection = {
  items: Array<Maybe<InputField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InputFieldDescription = {
  json: Scalars['JSON'];
  links: InputFieldDescriptionLinks;
};

export type InputFieldDescriptionAssets = {
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InputFieldDescriptionEntries = {
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InputFieldDescriptionLinks = {
  assets: InputFieldDescriptionAssets;
  entries: InputFieldDescriptionEntries;
  resources: InputFieldDescriptionResources;
};

export type InputFieldDescriptionResources = {
  block: Array<ResourceLink>;
};

export type InputFieldFilter = {
  AND?: InputMaybe<Array<InputMaybe<InputFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InputFieldFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholderText?: InputMaybe<Scalars['String']>;
  placeholderText_contains?: InputMaybe<Scalars['String']>;
  placeholderText_exists?: InputMaybe<Scalars['Boolean']>;
  placeholderText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholderText_not?: InputMaybe<Scalars['String']>;
  placeholderText_not_contains?: InputMaybe<Scalars['String']>;
  placeholderText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type InputFieldLinkingCollections = {
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type InputFieldLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<InputFieldLinkingCollectionsContentContainerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type InputFieldLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InputFieldLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum InputFieldOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PlaceholderTextAsc = 'placeholderText_ASC',
  PlaceholderTextDesc = 'placeholderText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type Link = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  follow?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LinkLinkingCollections>;
  openInNewWindow?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkOpenInNewWindowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/link) */
export type LinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LinkCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  follow?: InputMaybe<Scalars['Boolean']>;
  follow_exists?: InputMaybe<Scalars['Boolean']>;
  follow_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  openInNewWindow?: InputMaybe<Scalars['Boolean']>;
  openInNewWindow_exists?: InputMaybe<Scalars['Boolean']>;
  openInNewWindow_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LinkLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  buttonCollection?: Maybe<ButtonCollection>;
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  mediaCollection?: Maybe<MediaCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  quickLinksCollection?: Maybe<QuickLinksCollection>;
  staticMediaCollection?: Maybe<StaticMediaCollection>;
  videoMediaCollection?: Maybe<VideoMediaCollection>;
};

export type LinkLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsContentContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsQuickLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsStaticMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsStaticMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsVideoMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum LinkLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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

export enum LinkLinkingCollectionsStaticMediaCollectionOrder {
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

export enum LinkLinkingCollectionsVideoMediaCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
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
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBaner = Entry & {
  categoryId?: Maybe<CategoryId>;
  content?: Maybe<ContentContainer>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ListingPageBanerLinkingCollections>;
  positionAlign?: Maybe<Scalars['String']>;
  positionRow?: Maybe<Scalars['String']>;
  sys: Sys;
  type?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerCategoryIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryIdFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ContentContainerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerPositionAlignArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerPositionRowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/listingPageBaner) */
export type ListingPageBanerTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ListingPageBanerCollection = {
  items: Array<Maybe<ListingPageBaner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ListingPageBanerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListingPageBanerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListingPageBanerFilter>>>;
  categoryId?: InputMaybe<CfCategoryIdNestedFilter>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<CfContentContainerNestedFilter>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  positionAlign?: InputMaybe<Scalars['String']>;
  positionAlign_contains?: InputMaybe<Scalars['String']>;
  positionAlign_exists?: InputMaybe<Scalars['Boolean']>;
  positionAlign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  positionAlign_not?: InputMaybe<Scalars['String']>;
  positionAlign_not_contains?: InputMaybe<Scalars['String']>;
  positionAlign_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  positionRow?: InputMaybe<Scalars['String']>;
  positionRow_contains?: InputMaybe<Scalars['String']>;
  positionRow_exists?: InputMaybe<Scalars['Boolean']>;
  positionRow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  positionRow_not?: InputMaybe<Scalars['String']>;
  positionRow_not_contains?: InputMaybe<Scalars['String']>;
  positionRow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingPageBanerLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ListingPageBanerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ListingPageBanerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ListingPageBanerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ListingPageBanerLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type Media = Entry & {
  altText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  linkedFrom?: Maybe<MediaLinkingCollections>;
  mediaDesktop?: Maybe<Asset>;
  mediaMobile?: Maybe<Asset>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaAltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaMediaDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/media) */
export type MediaMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type MediaCollection = {
  items: Array<Maybe<Media>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mediaDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type MediaLinkingCollections = {
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
};

export type MediaLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsContentContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MediaLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MediaLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type Metadata = Entry & {
  canonicalUrl?: Maybe<Entry>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MetadataLinkingCollections>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Asset>;
  ogLink?: Maybe<Entry>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  sys: Sys;
  viewport?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataOgDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataOgImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataOgLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataOgTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataOgTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/metadata) */
export type MetadataViewportArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MetadataCollection = {
  items: Array<Maybe<Metadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription?: InputMaybe<Scalars['String']>;
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']>;
  ogLink_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType?: InputMaybe<Scalars['String']>;
  ogType_contains?: InputMaybe<Scalars['String']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType_not?: InputMaybe<Scalars['String']>;
  ogType_not_contains?: InputMaybe<Scalars['String']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  viewport?: InputMaybe<Scalars['String']>;
  viewport_contains?: InputMaybe<Scalars['String']>;
  viewport_exists?: InputMaybe<Scalars['Boolean']>;
  viewport_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viewport_not?: InputMaybe<Scalars['String']>;
  viewport_not_contains?: InputMaybe<Scalars['String']>;
  viewport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MetadataLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type MetadataLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MetadataLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MetadataLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum MetadataOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ViewportAsc = 'viewport_ASC',
  ViewportDesc = 'viewport_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/multiColumnContent) */
export type MultiColumnContent = Entry & {
  contentCollection?: Maybe<MultiColumnContentContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MultiColumnContentLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/multiColumnContent) */
export type MultiColumnContentContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MultiColumnContentContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentContainerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/multiColumnContent) */
export type MultiColumnContentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/multiColumnContent) */
export type MultiColumnContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MultiColumnContentCollection = {
  items: Array<Maybe<MultiColumnContent>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MultiColumnContentContentCollection = {
  items: Array<Maybe<ContentContainer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum MultiColumnContentContentCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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
  AND?: InputMaybe<Array<InputMaybe<MultiColumnContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MultiColumnContentFilter>>>;
  content?: InputMaybe<CfContentContainerNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MultiColumnContentLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type MultiColumnContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MultiColumnContentLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MultiColumnContentLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MultiColumnContentLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type Navigation = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  navColour?: Maybe<TextColour>;
  navigationItemsCollection?: Maybe<NavigationNavigationItemsCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type NavigationExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type NavigationInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type NavigationNavColourArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextColourFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigation) */
export type NavigationNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};

export type NavigationCollection = {
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navColour?: InputMaybe<CfTextColourNestedFilter>;
  navColour_exists?: InputMaybe<Scalars['Boolean']>;
  navigationItems?: InputMaybe<CfNavigationItemNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItem = Entry & {
  colour?: Maybe<TextColour>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationItemLinkingCollections>;
  mainLink?: Maybe<Link>;
  mediaCollection?: Maybe<NavigationItemMediaCollection>;
  navigationItemsCollection?: Maybe<NavigationItemNavigationItemsCollection>;
  navigationLinksCollection?: Maybe<NavigationItemNavigationLinksCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemColourArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TextColourFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemMainLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/navigationItem) */
export type NavigationItemNavigationLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemNavigationLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkFilter>;
};

export type NavigationItemCollection = {
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  colour?: InputMaybe<CfTextColourNestedFilter>;
  colour_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainLink?: InputMaybe<CfLinkNestedFilter>;
  mainLink_exists?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<CfMediaNestedFilter>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationItems?: InputMaybe<CfNavigationItemNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationLinks?: InputMaybe<CfLinkNestedFilter>;
  navigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationItemLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
};

export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationItemLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationItemLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<NavigationItemLinkingCollectionsNavigationItemCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type NavigationItemMediaCollection = {
  items: Array<Maybe<Media>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationItemMediaCollectionOrder {
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

export type NavigationItemNavigationItemsCollection = {
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationItemNavigationItemsCollectionOrder {
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

export type NavigationItemNavigationLinksCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationItemNavigationLinksCollectionOrder {
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
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
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
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<NavigationLinkingCollectionsContentContainerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type Page = Entry & {
  contentCollection?: Maybe<PageContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageContentFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/page) */
export type PageMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContentCollection = {
  items: Array<Maybe<PageContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageContentItem =
  | Carousel
  | FullWidthImage
  | ImageWithText
  | ListingPageBaner
  | MultiColumnContent
  | Text;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/product) */
export type Product = Entry & {
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/product) */
export type ProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductCollection = {
  items: Array<Maybe<Product>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProductLinkingCollections = {
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type ProductLinkingCollectionsContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductLinkingCollectionsContentContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProductLinkingCollectionsContentContainerCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ShortTextAsc = 'shortText_ASC',
  ShortTextDesc = 'shortText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ProductOrder {
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
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  carousel?: Maybe<Carousel>;
  carouselCollection?: Maybe<CarouselCollection>;
  categoryId?: Maybe<CategoryId>;
  categoryIdCollection?: Maybe<CategoryIdCollection>;
  contentContainer?: Maybe<ContentContainer>;
  contentContainerCollection?: Maybe<ContentContainerCollection>;
  customPage?: Maybe<CustomPage>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  fullWidthImage?: Maybe<FullWidthImage>;
  fullWidthImageCollection?: Maybe<FullWidthImageCollection>;
  iframe?: Maybe<Iframe>;
  iframeCollection?: Maybe<IframeCollection>;
  imageWithText?: Maybe<ImageWithText>;
  imageWithTextCollection?: Maybe<ImageWithTextCollection>;
  infobar?: Maybe<Infobar>;
  infobarCollection?: Maybe<InfobarCollection>;
  inputField?: Maybe<InputField>;
  inputFieldCollection?: Maybe<InputFieldCollection>;
  link?: Maybe<Link>;
  linkCollection?: Maybe<LinkCollection>;
  listingPageBaner?: Maybe<ListingPageBaner>;
  listingPageBanerCollection?: Maybe<ListingPageBanerCollection>;
  media?: Maybe<Media>;
  mediaCollection?: Maybe<MediaCollection>;
  metadata?: Maybe<Metadata>;
  metadataCollection?: Maybe<MetadataCollection>;
  multiColumnContent?: Maybe<MultiColumnContent>;
  multiColumnContentCollection?: Maybe<MultiColumnContentCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
  quickLinks?: Maybe<QuickLinks>;
  quickLinksCollection?: Maybe<QuickLinksCollection>;
  simpleCarousel?: Maybe<SimpleCarousel>;
  simpleCarouselCollection?: Maybe<SimpleCarouselCollection>;
  staticMedia?: Maybe<StaticMedia>;
  staticMediaCollection?: Maybe<StaticMediaCollection>;
  test?: Maybe<Test>;
  testCollection?: Maybe<TestCollection>;
  text?: Maybe<Text>;
  textCollection?: Maybe<TextCollection>;
  textColour?: Maybe<TextColour>;
  textColourCollection?: Maybe<TextColourCollection>;
  textPosition?: Maybe<TextPosition>;
  textPositionCollection?: Maybe<TextPositionCollection>;
  versionTracking?: Maybe<VersionTracking>;
  versionTrackingCollection?: Maybe<VersionTrackingCollection>;
  videoMedia?: Maybe<VideoMedia>;
  videoMediaCollection?: Maybe<VideoMediaCollection>;
  xoWidget?: Maybe<XoWidget>;
  xoWidgetCollection?: Maybe<XoWidgetCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostFilter>;
};

export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};

export type QueryCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CarouselFilter>;
};

export type QueryCategoryIdArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCategoryIdCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CategoryIdOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryIdFilter>;
};

export type QueryContentContainerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryContentContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentContainerFilter>;
};

export type QueryCustomPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CustomPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomPageFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryFullWidthImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FullWidthImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FullWidthImageFilter>;
};

export type QueryIframeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryIframeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IframeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IframeFilter>;
};

export type QueryImageWithTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryImageWithTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageWithTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWithTextFilter>;
};

export type QueryInfobarArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryInfobarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InfobarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfobarFilter>;
};

export type QueryInputFieldArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryInputFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InputFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InputFieldFilter>;
};

export type QueryLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkFilter>;
};

export type QueryListingPageBanerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryListingPageBanerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ListingPageBanerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ListingPageBanerFilter>;
};

export type QueryMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediaFilter>;
};

export type QueryMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetadataFilter>;
};

export type QueryMultiColumnContentArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryMultiColumnContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MultiColumnContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MultiColumnContentFilter>;
};

export type QueryNavigationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationFilter>;
};

export type QueryNavigationItemArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemFilter>;
};

export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};

export type QueryProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductFilter>;
};

export type QueryQuickLinksArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryQuickLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuickLinksOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuickLinksFilter>;
};

export type QuerySimpleCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QuerySimpleCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SimpleCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SimpleCarouselFilter>;
};

export type QueryStaticMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryStaticMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StaticMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StaticMediaFilter>;
};

export type QueryTestArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryTestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestFilter>;
};

export type QueryTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextFilter>;
};

export type QueryTextColourArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryTextColourCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextColourOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextColourFilter>;
};

export type QueryTextPositionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryTextPositionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextPositionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextPositionFilter>;
};

export type QueryVersionTrackingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVersionTrackingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VersionTrackingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VersionTrackingFilter>;
};

export type QueryVideoMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVideoMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoMediaFilter>;
};

export type QueryXoWidgetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryXoWidgetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<XoWidgetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<XoWidgetFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinks = Entry & {
  categoryId?: Maybe<CategoryId>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkCollection?: Maybe<QuickLinksLinkCollection>;
  linkedFrom?: Maybe<QuickLinksLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinksCategoryIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryIdFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinksExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinksInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinksLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<QuickLinksLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/quickLinks) */
export type QuickLinksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuickLinksCollection = {
  items: Array<Maybe<QuickLinks>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type QuickLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuickLinksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuickLinksFilter>>>;
  categoryId?: InputMaybe<CfCategoryIdNestedFilter>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfLinkNestedFilter>;
  linkCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuickLinksLinkCollection = {
  items: Array<Maybe<Link>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export type QuickLinksLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
};

export type QuickLinksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarousel = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SimpleCarouselLinkingCollections>;
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  xoWidget?: Maybe<XoWidget>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarouselExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarouselInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarouselProductsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/simpleCarousel) */
export type SimpleCarouselXoWidgetArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<XoWidgetFilter>;
};

export type SimpleCarouselCollection = {
  items: Array<Maybe<SimpleCarousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SimpleCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<SimpleCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SimpleCarouselFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  xoWidget?: InputMaybe<CfXoWidgetNestedFilter>;
  xoWidget_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SimpleCarouselLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type SimpleCarouselLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SimpleCarouselLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SimpleCarouselLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SimpleCarouselLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SimpleCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMedia = Entry & {
  altText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  imageDesktop?: Maybe<Asset>;
  imageMobile?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  linkedFrom?: Maybe<StaticMediaLinkingCollections>;
  shopTheLook?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaAltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaImageDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaImageMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/staticMedia) */
export type StaticMediaShopTheLookArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StaticMediaCollection = {
  items: Array<Maybe<StaticMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StaticMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaticMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticMediaFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  imageMobile_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  shopTheLook_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shopTheLook_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shopTheLook_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shopTheLook_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type StaticMediaLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type StaticMediaLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StaticMediaLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type StaticMediaLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StaticMediaLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type StaticMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StaticMediaLinkingCollectionsBlogPostCollectionOrder {
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

export enum StaticMediaLinkingCollectionsCustomPageCollectionOrder {
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

export enum StaticMediaOrder {
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

export type Sys = {
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/test) */
export type Test = Entry & {
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestLinkingCollections>;
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/test) */
export type TestCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/test) */
export type TestLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/test) */
export type TestProductsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestCollection = {
  items: Array<Maybe<Test>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  products_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type TestLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
};

export type TestLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/text) */
export type Text = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextLinkingCollections>;
  longText?: Maybe<TextLongText>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/text) */
export type TextExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/text) */
export type TextInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/text) */
export type TextLongTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextCollection = {
  items: Array<Maybe<Text>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textColour) */
export type TextColour = Entry & {
  colourHex?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextColourLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textColour) */
export type TextColourColourHexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textColour) */
export type TextColourInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textColour) */
export type TextColourLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextColourCollection = {
  items: Array<Maybe<TextColour>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextColourFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextColourFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextColourFilter>>>;
  colourHex?: InputMaybe<Scalars['String']>;
  colourHex_contains?: InputMaybe<Scalars['String']>;
  colourHex_exists?: InputMaybe<Scalars['Boolean']>;
  colourHex_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colourHex_not?: InputMaybe<Scalars['String']>;
  colourHex_not_contains?: InputMaybe<Scalars['String']>;
  colourHex_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TextColourLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  fullWidthImageCollection?: Maybe<FullWidthImageCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
};

export type TextColourLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextColourLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextColourLinkingCollectionsFullWidthImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextColourLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextColourLinkingCollectionsNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextColourLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextColourLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextColourLinkingCollectionsFullWidthImageCollectionOrder {
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

export enum TextColourLinkingCollectionsNavigationCollectionOrder {
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

export enum TextColourLinkingCollectionsNavigationItemCollectionOrder {
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

export enum TextColourOrder {
  ColourHexAsc = 'colourHex_ASC',
  ColourHexDesc = 'colourHex_DESC',
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

export type TextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longText_contains?: InputMaybe<Scalars['String']>;
  longText_exists?: InputMaybe<Scalars['Boolean']>;
  longText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type TextLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type TextLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum TextLinkingCollectionsPageCollectionOrder {
  ExternalNameAsc = 'externalName_ASC',
  ExternalNameDesc = 'externalName_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
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
  json: Scalars['JSON'];
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textPosition) */
export type TextPosition = Entry & {
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TextPositionLinkingCollections>;
  sys: Sys;
  textPosition?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textPosition) */
export type TextPositionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/textPosition) */
export type TextPositionTextPositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextPositionCollection = {
  items: Array<Maybe<TextPosition>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextPositionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextPositionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextPositionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  textPosition?: InputMaybe<Scalars['String']>;
  textPosition_contains?: InputMaybe<Scalars['String']>;
  textPosition_exists?: InputMaybe<Scalars['Boolean']>;
  textPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textPosition_not?: InputMaybe<Scalars['String']>;
  textPosition_not_contains?: InputMaybe<Scalars['String']>;
  textPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextPositionLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  fullWidthImageCollection?: Maybe<FullWidthImageCollection>;
};

export type TextPositionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TextPositionLinkingCollectionsFullWidthImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<
    Array<InputMaybe<TextPositionLinkingCollectionsFullWidthImageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TextPositionLinkingCollectionsFullWidthImageCollectionOrder {
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

export enum TextPositionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextPositionAsc = 'textPosition_ASC',
  TextPositionDesc = 'textPosition_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/versionTracking) */
export type VersionTracking = Entry & {
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VersionTrackingLinkingCollections>;
  sys: Sys;
  version?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/versionTracking) */
export type VersionTrackingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/versionTracking) */
export type VersionTrackingVersionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type VersionTrackingCollection = {
  items: Array<Maybe<VersionTracking>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VersionTrackingFilter = {
  AND?: InputMaybe<Array<InputMaybe<VersionTrackingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionTrackingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_exists?: InputMaybe<Scalars['Boolean']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionTrackingLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
};

export type VersionTrackingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VersionTrackingOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMedia = Entry & {
  altText?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  linkedFrom?: Maybe<VideoMediaLinkingCollections>;
  loop?: Maybe<Scalars['Boolean']>;
  mediaDesktop?: Maybe<Asset>;
  mediaMobile?: Maybe<Asset>;
  posterDesktop?: Maybe<Asset>;
  posterMobile?: Maybe<Asset>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaAltTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaLoopArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaMediaDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaPosterDesktopArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/videoMedia) */
export type VideoMediaPosterMobileArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type VideoMediaCollection = {
  items: Array<Maybe<VideoMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VideoMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoMediaFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  autoplay?: InputMaybe<Scalars['Boolean']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<CfLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  loop?: InputMaybe<Scalars['Boolean']>;
  loop_exists?: InputMaybe<Scalars['Boolean']>;
  loop_not?: InputMaybe<Scalars['Boolean']>;
  mediaDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']>;
  posterDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  posterMobile_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type VideoMediaLinkingCollections = {
  blogPostCollection?: Maybe<BlogPostCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type VideoMediaLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoMediaLinkingCollectionsBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type VideoMediaLinkingCollectionsCustomPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoMediaLinkingCollectionsCustomPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type VideoMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/xoWidget) */
export type XoWidget = Entry & {
  contentfulMetadata: ContentfulMetadata;
  externalName?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<XoWidgetLinkingCollections>;
  sys: Sys;
  widgetId?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/xoWidget) */
export type XoWidgetExternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/xoWidget) */
export type XoWidgetInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/xoWidget) */
export type XoWidgetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/qh4760agmiux/content_types/xoWidget) */
export type XoWidgetWidgetIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type XoWidgetCollection = {
  items: Array<Maybe<XoWidget>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type XoWidgetFilter = {
  AND?: InputMaybe<Array<InputMaybe<XoWidgetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<XoWidgetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  widgetId?: InputMaybe<Scalars['String']>;
  widgetId_contains?: InputMaybe<Scalars['String']>;
  widgetId_exists?: InputMaybe<Scalars['Boolean']>;
  widgetId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  widgetId_not?: InputMaybe<Scalars['String']>;
  widgetId_not_contains?: InputMaybe<Scalars['String']>;
  widgetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XoWidgetLinkingCollections = {
  entryCollection?: Maybe<EntryCollection>;
  simpleCarouselCollection?: Maybe<SimpleCarouselCollection>;
};

export type XoWidgetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type XoWidgetLinkingCollectionsSimpleCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<XoWidgetLinkingCollectionsSimpleCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum XoWidgetLinkingCollectionsSimpleCarouselCollectionOrder {
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

export enum XoWidgetOrder {
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
  WidgetIdAsc = 'widgetId_ASC',
  WidgetIdDesc = 'widgetId_DESC',
}

export type CfCategoryIdNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryIdNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryIdNestedFilter>>>;
  categoryId?: InputMaybe<Scalars['String']>;
  categoryId_contains?: InputMaybe<Scalars['String']>;
  categoryId_exists?: InputMaybe<Scalars['Boolean']>;
  categoryId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryId_not?: InputMaybe<Scalars['String']>;
  categoryId_not_contains?: InputMaybe<Scalars['String']>;
  categoryId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContentContainerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContentContainerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContentContainerNestedFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  richText_contains?: InputMaybe<Scalars['String']>;
  richText_exists?: InputMaybe<Scalars['Boolean']>;
  richText_not_contains?: InputMaybe<Scalars['String']>;
  shortText?: InputMaybe<Scalars['String']>;
  shortText_contains?: InputMaybe<Scalars['String']>;
  shortText_exists?: InputMaybe<Scalars['Boolean']>;
  shortText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortText_not?: InputMaybe<Scalars['String']>;
  shortText_not_contains?: InputMaybe<Scalars['String']>;
  shortText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  follow?: InputMaybe<Scalars['Boolean']>;
  follow_exists?: InputMaybe<Scalars['Boolean']>;
  follow_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  openInNewWindow?: InputMaybe<Scalars['Boolean']>;
  openInNewWindow_exists?: InputMaybe<Scalars['Boolean']>;
  openInNewWindow_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfMediaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMediaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMediaNestedFilter>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_exists?: InputMaybe<Scalars['Boolean']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  mediaDesktop_exists?: InputMaybe<Scalars['Boolean']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMetadataNestedFilter>>>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription?: InputMaybe<Scalars['String']>;
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']>;
  ogLink_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType?: InputMaybe<Scalars['String']>;
  ogType_contains?: InputMaybe<Scalars['String']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType_not?: InputMaybe<Scalars['String']>;
  ogType_not_contains?: InputMaybe<Scalars['String']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  viewport?: InputMaybe<Scalars['String']>;
  viewport_contains?: InputMaybe<Scalars['String']>;
  viewport_exists?: InputMaybe<Scalars['Boolean']>;
  viewport_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  viewport_not?: InputMaybe<Scalars['String']>;
  viewport_not_contains?: InputMaybe<Scalars['String']>;
  viewport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  colour_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainLink_exists?: InputMaybe<Scalars['Boolean']>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTextColourNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextColourNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextColourNestedFilter>>>;
  colourHex?: InputMaybe<Scalars['String']>;
  colourHex_contains?: InputMaybe<Scalars['String']>;
  colourHex_exists?: InputMaybe<Scalars['Boolean']>;
  colourHex_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colourHex_not?: InputMaybe<Scalars['String']>;
  colourHex_not_contains?: InputMaybe<Scalars['String']>;
  colourHex_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTextPositionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextPositionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextPositionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  textPosition?: InputMaybe<Scalars['String']>;
  textPosition_contains?: InputMaybe<Scalars['String']>;
  textPosition_exists?: InputMaybe<Scalars['Boolean']>;
  textPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  textPosition_not?: InputMaybe<Scalars['String']>;
  textPosition_not_contains?: InputMaybe<Scalars['String']>;
  textPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfXoWidgetNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfXoWidgetNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfXoWidgetNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  widgetId?: InputMaybe<Scalars['String']>;
  widgetId_contains?: InputMaybe<Scalars['String']>;
  widgetId_exists?: InputMaybe<Scalars['Boolean']>;
  widgetId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  widgetId_not?: InputMaybe<Scalars['String']>;
  widgetId_not_contains?: InputMaybe<Scalars['String']>;
  widgetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfrelatedMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfrelatedMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfrelatedMultiTypeNestedFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalName?: InputMaybe<Scalars['String']>;
  externalName_contains?: InputMaybe<Scalars['String']>;
  externalName_exists?: InputMaybe<Scalars['Boolean']>;
  externalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalName_not?: InputMaybe<Scalars['String']>;
  externalName_not_contains?: InputMaybe<Scalars['String']>;
  externalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  layout_exists?: InputMaybe<Scalars['Boolean']>;
  metadata_exists?: InputMaybe<Scalars['Boolean']>;
  relatedCollection_exists?: InputMaybe<Scalars['Boolean']>;
  style_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type LinkFragment = {
  externalName?: string | null;
  internalName?: string | null;
  url?: string | null;
};

export type MediaFragment = {
  externalName?: string | null;
  internalName?: string | null;
  altText?: string | null;
  link?: { externalName?: string | null; internalName?: string | null; url?: string | null } | null;
};

export type NavigationItemFragment = {
  externalName?: string | null;
  internalName?: string | null;
  mainLink?: {
    externalName?: string | null;
    internalName?: string | null;
    url?: string | null;
  } | null;
  navigationLinksCollection?: {
    total: number;
    items: Array<{
      externalName?: string | null;
      internalName?: string | null;
      url?: string | null;
    } | null>;
  } | null;
  mediaCollection?: {
    total: number;
    items: Array<{
      externalName?: string | null;
      internalName?: string | null;
      altText?: string | null;
      link?: {
        externalName?: string | null;
        internalName?: string | null;
        url?: string | null;
      } | null;
    } | null>;
  } | null;
  colour?: { internalName?: string | null; colourHex?: string | null } | null;
};

export type GetNavigationQueryVariables = Exact<{ [key: string]: never }>;

export type GetNavigationQuery = {
  navigationCollection?: {
    items: Array<{
      internalName?: string | null;
      sys: { id: string };
      navColour?: { colourHex?: string | null } | null;
      navigationItemsCollection?: {
        total: number;
        items: Array<{
          externalName?: string | null;
          internalName?: string | null;
          navigationItemsCollection?: {
            total: number;
            items: Array<{
              externalName?: string | null;
              internalName?: string | null;
              mainLink?: {
                externalName?: string | null;
                internalName?: string | null;
                url?: string | null;
              } | null;
              navigationLinksCollection?: {
                total: number;
                items: Array<{
                  externalName?: string | null;
                  internalName?: string | null;
                  url?: string | null;
                } | null>;
              } | null;
              mediaCollection?: {
                total: number;
                items: Array<{
                  externalName?: string | null;
                  internalName?: string | null;
                  altText?: string | null;
                  link?: {
                    externalName?: string | null;
                    internalName?: string | null;
                    url?: string | null;
                  } | null;
                } | null>;
              } | null;
              colour?: { internalName?: string | null; colourHex?: string | null } | null;
            } | null>;
          } | null;
          mainLink?: {
            externalName?: string | null;
            internalName?: string | null;
            url?: string | null;
          } | null;
          navigationLinksCollection?: {
            total: number;
            items: Array<{
              externalName?: string | null;
              internalName?: string | null;
              url?: string | null;
            } | null>;
          } | null;
          mediaCollection?: {
            total: number;
            items: Array<{
              externalName?: string | null;
              internalName?: string | null;
              altText?: string | null;
              link?: {
                externalName?: string | null;
                internalName?: string | null;
                url?: string | null;
              } | null;
            } | null>;
          } | null;
          colour?: { internalName?: string | null; colourHex?: string | null } | null;
        } | null>;
      } | null;
    } | null>;
  } | null;
  mediaCollection?: {
    items: Array<{
      mediaDesktop?: { url?: string | null } | null;
      link?: { url?: string | null } | null;
    } | null>;
  } | null;
  contentContainerCollection?: {
    items: Array<{
      internalName?: string | null;
      shortText?: string | null;
      contentCollection?: {
        items: Array<
          | { __typename: 'Button' }
          | { __typename: 'InputField' }
          | {
              __typename: 'Link';
              externalName?: string | null;
              internalName?: string | null;
              url?: string | null;
            }
          | { __typename: 'Media' }
          | { __typename: 'Navigation' }
          | { __typename: 'Product' }
          | null
        >;
      } | null;
      richText?: { json: unknown } | null;
    } | null>;
  } | null;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: { hash: string }) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const LinkFragmentDoc = new TypedDocumentString(`
    fragment Link on Link {
  externalName
  internalName
  url
}
    `) as unknown as TypedDocumentString<LinkFragment, unknown>;
export const MediaFragmentDoc = new TypedDocumentString(`
    fragment Media on Media {
  externalName
  internalName
  link {
    ...Link
  }
  altText
}
    fragment Link on Link {
  externalName
  internalName
  url
}`) as unknown as TypedDocumentString<MediaFragment, unknown>;
export const NavigationItemFragmentDoc = new TypedDocumentString(`
    fragment NavigationItem on NavigationItem {
  externalName
  internalName
  mainLink {
    ...Link
  }
  navigationLinksCollection(limit: 9) {
    total
    items {
      ...Link
    }
  }
  mediaCollection(limit: 9) {
    total
    items {
      ...Media
    }
  }
  colour {
    internalName
    colourHex
  }
}
    fragment Link on Link {
  externalName
  internalName
  url
}
fragment Media on Media {
  externalName
  internalName
  link {
    ...Link
  }
  altText
}`) as unknown as TypedDocumentString<NavigationItemFragment, unknown>;
export const GetNavigationDocument = new TypedDocumentString(`
    query GetNavigation {
  navigationCollection(
    where: {OR: [{internalName: "Main Navigation Mobile"}, {internalName: "Main Navigation Desktop"}]}
    limit: 2
  ) {
    items {
      sys {
        id
      }
      internalName
      navColour {
        colourHex
      }
      navigationItemsCollection(limit: 10) {
        total
        items {
          ...NavigationItem
          navigationItemsCollection(limit: 10) {
            total
            items {
              ...NavigationItem
            }
          }
        }
      }
    }
  }
  mediaCollection(where: {internalName: "Pretty Green Logo"}) {
    items {
      mediaDesktop {
        url
      }
      link {
        url
      }
    }
  }
  contentContainerCollection(where: {internalName: "Infobar"}, limit: 1) {
    items {
      internalName
      contentCollection {
        items {
          __typename
          ... on Link {
            ...Link
          }
        }
      }
      shortText
      richText {
        json
      }
    }
  }
}
    fragment Link on Link {
  externalName
  internalName
  url
}
fragment Media on Media {
  externalName
  internalName
  link {
    ...Link
  }
  altText
}
fragment NavigationItem on NavigationItem {
  externalName
  internalName
  mainLink {
    ...Link
  }
  navigationLinksCollection(limit: 9) {
    total
    items {
      ...Link
    }
  }
  mediaCollection(limit: 9) {
    total
    items {
      ...Media
    }
  }
  colour {
    internalName
    colourHex
  }
}`) as unknown as TypedDocumentString<GetNavigationQuery, GetNavigationQueryVariables>;
