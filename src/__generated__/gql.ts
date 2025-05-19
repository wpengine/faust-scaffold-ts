/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ": typeof types.HeaderGeneralSettingsFragmentFragmentDoc;
  "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ": typeof types.PrimaryMenuItemFragmentFragmentDoc;
  "\n  fragment PostListFragment on Post {\n    id\n    title\n    uri\n    excerpt\n    date\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    author {\n      node {\n        name\n        avatar {\n          url\n        }\n      }\n    }\n  }\n": typeof types.PostListFragmentFragmentDoc;
  "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetExamplePageDocument;
  "\n  query GetHeaderMenu {\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetHeaderMenuDocument;
  "\n  query GetSiteData {\n    generalSettings {\n      title\n      description\n    }\n  }\n": typeof types.GetSiteDataDocument;
  "\n  \n  query GetArchive($uri: String!, $first: Int!, $after: String) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetArchiveDocument;
  "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n  }\n": typeof types.GetPageDocument;
  "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n  }\n": typeof types.GetPostDocument;
};
const documents: Documents = {
  "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ":
    types.HeaderGeneralSettingsFragmentFragmentDoc,
  "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ":
    types.PrimaryMenuItemFragmentFragmentDoc,
  "\n  fragment PostListFragment on Post {\n    id\n    title\n    uri\n    excerpt\n    date\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    author {\n      node {\n        name\n        avatar {\n          url\n        }\n      }\n    }\n  }\n":
    types.PostListFragmentFragmentDoc,
  "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.GetExamplePageDocument,
  "\n  query GetHeaderMenu {\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.GetHeaderMenuDocument,
  "\n  query GetSiteData {\n    generalSettings {\n      title\n      description\n    }\n  }\n":
    types.GetSiteDataDocument,
  "\n  \n  query GetArchive($uri: String!, $first: Int!, $after: String) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n    }\n  }\n":
    types.GetArchiveDocument,
  "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n  }\n":
    types.GetPageDocument,
  "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n  }\n":
    types.GetPostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ",
): (typeof documents)["\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment PostListFragment on Post {\n    id\n    title\n    uri\n    excerpt\n    date\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    author {\n      node {\n        name\n        avatar {\n          url\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment PostListFragment on Post {\n    id\n    title\n    uri\n    excerpt\n    date\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    author {\n      node {\n        name\n        avatar {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetHeaderMenu {\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetHeaderMenu {\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetSiteData {\n    generalSettings {\n      title\n      description\n    }\n  }\n",
): (typeof documents)["\n  query GetSiteData {\n    generalSettings {\n      title\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query GetArchive($uri: String!, $first: Int!, $after: String) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  \n  query GetArchive($uri: String!, $first: Int!, $after: String) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts(first: $first, after: $after) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            ...PostListFragment\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n  }\n",
): (typeof documents)["\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
