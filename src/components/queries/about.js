import gql from "graphql-tag";

const ABOUT_QUERY = gql`
  query about {
    abouts {
      data {
        attributes {
          bio
          avatar {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ABOUT_QUERY;
