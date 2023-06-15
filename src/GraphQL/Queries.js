import {GraphQLClient, gql} from 'graphql-request'

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const category = `
    id,
    name,
    slug,
    color { css }
`

const post = `
    id,
    title,
    slug,
    coverPhoto { url },
    content { html },
    description,
    createdAt,
    updatedAt
`

export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            name,
            slug
        }
    }

`