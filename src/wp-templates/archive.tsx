import {
  gql,
  useQuery,
  ApolloQueryResult,
  OperationVariables,
} from "@apollo/client";
import Head from "next/head";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import {
  SITE_DATA_QUERY,
  SiteDataQueryResponse,
} from "../queries/SiteSettingsQuery";
import {
  HEADER_MENU_QUERY,
  HeaderMenuQueryResponse,
} from "../queries/MenuQueries";
import { POST_LIST_FRAGMENT } from "../fragments/PostListFragment";
import PostListItem from "../components/post-list-item";
import { useFaustQuery, getNextStaticProps } from "@faustwp/core";
import { useState, useEffect } from "react";
import styles from "../styles/archive.module.css";
import { GetArchiveQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import { GetStaticPropsContext } from "next";

// Change to how many posts you want to load at once
const BATCH_SIZE = 5;

const ARCHIVE_QUERY = gql`
  ${POST_LIST_FRAGMENT}
  query GetArchive($uri: String!, $first: Int!, $after: String) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ...PostListFragment
          }
        }
      }
      ... on Tag {
        name
        posts(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ...PostListFragment
          }
        }
      }
    }
  }
`;

interface LoadMoreButtonProps {
  onClick: () => Promise<void>;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadMore = async (): Promise<void> => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <button
      type="button"
      className={styles.loadMoreButton}
      onClick={handleLoadMore}
      disabled={loading}
    >
      {loading ? <>Loading...</> : <>Load more</>}
    </button>
  );
};

const ArchivePage: FaustTemplate<GetArchiveQuery> = (props) => {

  const currentUri = props.__SEED_NODE__.uri;
  const {
    data,
    loading = true,
    error,
    fetchMore,
  } = useQuery<GetArchiveQuery>(ARCHIVE_QUERY, {
    variables: { first: BATCH_SIZE, after: null, uri: currentUri },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const siteDataQuery = useFaustQuery<SiteDataQueryResponse>(SITE_DATA_QUERY);
  const headerMenuDataQuery =
    useFaustQuery<HeaderMenuQueryResponse>(HEADER_MENU_QUERY);

  if (loading && !data)
    return (
      <div className="container-main flex justify-center py-20">Loading...</div>
    );

  if (error) return <p>Error! {error.message}</p>;

  if (
    !(
      data?.nodeByUri &&
      (data.nodeByUri.__typename === "Category" ||
        data.nodeByUri.__typename === "Tag") &&
      data.nodeByUri.posts &&
      data.nodeByUri.posts.nodes.length
    )
  ) {
    return <p>No posts have been published</p>;
  }

  const defaultSiteData: SiteDataQueryResponse["generalSettings"] = {
    title: "",
    description: "",
  };
  const defaultMenuItems: HeaderMenuQueryResponse["primaryMenuItems"]["nodes"] =
    [];

  const siteData = siteDataQuery?.generalSettings || defaultSiteData;
  const menuItems =
    headerMenuDataQuery?.primaryMenuItems?.nodes || defaultMenuItems;

  const { title: siteTitle, description: siteDescription } = siteData;
  const { archiveType, name, posts } = data?.nodeByUri || {};

  const loadMorePosts = async (): Promise<void> => {
    await fetchMore({
      variables: {
        first: BATCH_SIZE,
        after: posts.pageInfo.endCursor,
        uri: currentUri,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        const prevNode = prevResult.nodeByUri;
        const nextNode = fetchMoreResult.nodeByUri;

        if (
          prevNode &&
          nextNode &&
          prevNode.__typename === "Category" &&
          nextNode.__typename === "Category" &&
          prevNode.posts &&
          nextNode.posts &&
          prevNode.posts.__typename === "CategoryToPostConnection" &&
          nextNode.posts.__typename === "CategoryToPostConnection"
        ) {
          return {
            ...prevResult,
            nodeByUri: {
              ...nextNode,
              posts: {
                ...nextNode.posts,
                nodes: [...prevNode.posts.nodes, ...nextNode.posts.nodes],
              },
            },
          };
        }

        if (
          prevNode &&
          nextNode &&
          prevNode.__typename === "Tag" &&
          nextNode.__typename === "Tag" &&
          prevNode.posts &&
          nextNode.posts &&
          prevNode.posts.__typename === "TagToPostConnection" &&
          nextNode.posts.__typename === "TagToPostConnection"
        ) {
          return {
            ...prevResult,
            nodeByUri: {
              ...nextNode,
              posts: {
                ...nextNode.posts,
                nodes: [...prevNode.posts.nodes, ...nextNode.posts.nodes],
              },
            },
          };
        }

        return fetchMoreResult;
      },
    });
  };

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

      <main className="container mx-auto px-4">
        <EntryHeader title={`Archive for ${archiveType}: ${name}`} />

        <div className="space-y-12">
          {posts && posts.nodes && posts.nodes.length > 0 ? (
            posts.nodes.map((post) => (
              <PostListItem
                key={(post as any).id || (post as any).uri}
                post={post}
              />
            ))
          ) : (
            <p>No posts found.</p>
          )}
          {posts.pageInfo.hasNextPage && (
            <div className={styles.loadMoreButtonContainer}>
              <LoadMoreButton onClick={loadMorePosts} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: ArchivePage as any,
    revalidate: 60,
  });
}

ArchivePage.queries = [
  {
    query: ARCHIVE_QUERY,
    variables: ({ uri }: { uri: string }) => ({
      uri,
      first: BATCH_SIZE,
      after: null,
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];

export default ArchivePage;
