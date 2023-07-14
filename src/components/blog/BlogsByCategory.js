import React from 'react';
import Posts from "./Posts";
import {QUERY_BY_CATEGORY} from "../../graphql/Queries";
import useQueryPosts from "../../graphql/useQueryPosts";

const BlogsByCategory = () => {
    const {posts, error} = useQueryPosts({query: QUERY_BY_CATEGORY});
    if (error) return <h2>{error}</h2>

    return (
        <>
            <Posts posts={posts}/>
        </>
    );
}

export default BlogsByCategory;