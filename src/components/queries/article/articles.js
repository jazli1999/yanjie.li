import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          published_date
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          tags {
            data {
              attributes {
                name
              }
            }
          }
          image {
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

export default ARTICLES_QUERY;
