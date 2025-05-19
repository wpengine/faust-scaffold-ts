import { gql } from "../__generated__";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  SITE_DATA_QUERY,
  SiteDataQueryResponse,
} from "../queries/SiteSettingsQuery";
import {
  HEADER_MENU_QUERY,
  HeaderMenuQueryResponse,
} from "../queries/MenuQueries";
import { useFaustQuery } from "@faustwp/core";
import { GetPostQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const POST_QUERY = gql(`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`);

const Component: FaustTemplate<GetPostQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const contentQuery = useFaustQuery<GetPostQuery>(POST_QUERY) || {};
  const siteDataQuery = useFaustQuery<SiteDataQueryResponse>(SITE_DATA_QUERY);
  const headerMenuDataQuery = useFaustQuery<HeaderMenuQueryResponse>(HEADER_MENU_QUERY);

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
  const { title, content, date, author } = contentQuery?.post || {};

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={title} date={date} author={author.node.name} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
};

Component.queries = [
  {
    query: POST_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
  {
    query: SITE_DATA_QUERY,
  },
  {
    query: HEADER_MENU_QUERY,
  },
];

export default Component;
