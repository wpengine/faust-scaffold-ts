/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ": types.HeaderGeneralSettingsFragmentFragmentDoc,
    "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ": types.PrimaryMenuItemFragmentFragmentDoc,
    "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetExamplePageDocument,
    "\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetArchiveDocument,
    "\n  query GetHomePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetHomePageDocument,
    "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPageDocument,
    "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPostDocument,
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
export function gql(source: "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "): (typeof documents)["\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHomePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHomePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;