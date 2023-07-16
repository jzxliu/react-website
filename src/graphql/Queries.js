import { gql } from "graphql-request";

const post = `
    id
    title
    datePublished
    slug
    coverPhoto {
      url
    }
    categories {
      name
      id
      slug
      color {css}
    }
    description
`

export const QUERY_URL = 'https://ca-central-1.cdn.hygraph.com/content/clin9ia78079n01ugb1jj7d3z/master'
export const QUERY_SLUG_CATEGORIES = gql`
{
    categories {
      name
      slug
    }
}
`

export const QUERY_BLOGS = gql`
query GetPosts($limit: Int!, $skip: Int!) {
  posts(orderBy: datePublished_DESC, first: $limit, skip: $skip){
    ${post}
  }
  
  countConnection: postsConnection(stage: PUBLISHED){
    aggregate{
      count
    }
  }
}
`

export const QUERY_BY_CATEGORY = gql`
query GetPostsByCategory($slug: String!, $limit: Int!, $skip: Int!) {
  posts(where: {categories_some: {slug: $slug}}, orderBy: datePublished_DESC, first: $limit, skip: $skip){
    ${post}
  }
  countConnection: postsConnection(stage: PUBLISHED, where:{categories_some:{slug: $slug}}){
    aggregate{
      count
    }
  }
}
`

export const QUERY_BY_SEARCH = gql`
query GetPostsByCategory($slug: String!, $limit: Int!, $skip: Int!) {
  posts(where: {_search: $slug}, orderBy: datePublished_DESC, first: $limit, skip: $skip){
    ${post}
  }
  countConnection: postsConnection(stage: PUBLISHED, where: {_search: $slug}){
    aggregate{
      count
    }
  }
}
`

export const QUERY_POST = gql`
query GetPost($slug: String!){
  posts(where: {slug: $slug}){
    id
    title
    datePublished
    slug
    coverPhoto{
      url
    }
    content {
      html
    }
  }
}
`