import { gql } from "@apollo/client";

export interface HeaderMenuQueryResponse {
  primaryMenuItems: {
    nodes: Array<{
      id: string;
      uri: string;
      path: string;
      label: string;
      parentId: string;
      cssClasses: string[];
      menu: {
        node: {
          name: string;
        };
      };
    }>;
  };
}

export const HEADER_MENU_QUERY = gql`
  query GetHeaderMenu {
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
`;
