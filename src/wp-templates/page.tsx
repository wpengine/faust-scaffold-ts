import { gql, useQuery } from "@apollo/client";
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
import { GetPageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const PAGE_QUERY = gql(`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
  }
`);

const SinglePage: FaustTemplate<GetPageQuery> = (props) => {
  if (props.loading) {
    return <>Loading...</>;
  }

  const databaseId = props.__SEED_NODE__.databaseId;

  const {
    data,
    loading = true,
    error,
  } = useQuery<GetPageQuery>(PAGE_QUERY, {
    variables: {
      databaseId: databaseId,
      asPreview: false,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const siteDataQuery = useQuery<SiteDataQueryResponse>(SITE_DATA_QUERY);
  const headerMenuDataQuery =
    useQuery<HeaderMenuQueryResponse>(HEADER_MENU_QUERY);

  if (loading && !data)
    return (
      <div className="container-main flex justify-center py-20">Loading...</div>
    );

  if (error) return <p>Error! {error.message}</p>;

  if (!data?.page) {
    return <p>No pages have been published</p>;
  }

  const defaultSiteData: SiteDataQueryResponse["generalSettings"] = {
    title: "",
    description: "",
  };
  const defaultMenuItems: HeaderMenuQueryResponse["primaryMenuItems"]["nodes"] =
    [];

  const siteData = siteDataQuery?.data?.generalSettings || defaultSiteData;
  const menuItems =
    headerMenuDataQuery?.data?.primaryMenuItems?.nodes || defaultMenuItems;
  const { title: siteTitle, description: siteDescription } = siteData;
  const { title, content } = data?.page || {};

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
        <EntryHeader title={title} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
};

SinglePage.queries = [
  {
    query: PAGE_QUERY,
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

export default SinglePage;
