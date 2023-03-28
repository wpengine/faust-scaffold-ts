import { gql } from "../__generated__";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import { GetArchiveQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const Component: FaustTemplate<GetArchiveQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { archiveType } = props.data.nodeByUri;

  if (archiveType !== "Category" && archiveType !== "Tag") {
    return <>Archive not found</>;
  }

  const { name, posts } = props.data.nodeByUri;
  const htmlTitle = `${archiveType}: ${name} - ${siteTitle}`;

  return (
    <>
      <Head>
        <title>{`${archiveType}: ${name} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={`Archive for ${archiveType}: ${name}`} />

        <h3>Recent Posts</h3>
        <ul>
          {posts.nodes.map((post) => (
            <Link key={post.id} href={post.uri}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
};

Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
  };
};

Component.query = gql(`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
      ... on Tag {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`);

export default Component;
