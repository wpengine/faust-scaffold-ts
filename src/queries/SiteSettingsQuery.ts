import { gql } from "@apollo/client";

export interface SiteDataQueryResponse {
  generalSettings: {
    title: string;
    description: string;
  };
}

export const SITE_DATA_QUERY = gql`
  query GetSiteData {
    generalSettings {
      title
      description
    }
  }
`;
