import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    posts(where: { name: $slug }) {
      nodes {
        title
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
