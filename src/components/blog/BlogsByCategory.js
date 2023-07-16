import React from 'react';
import Posts from "./Posts";
import {QUERY_BY_CATEGORY} from "../../graphql/Queries";
import useQueryPosts from "../../graphql/useQueryPosts";
import {useMyContext} from "./Store";
import Pagination from "./Pagination";

const BlogsByCategory = () => {
    const { totalPage } = useMyContext();
    const {posts, error} = useQueryPosts({query: QUERY_BY_CATEGORY});
    if (error) return <h2>{error}</h2>

    return (
        <>
            <Posts posts={posts}/>
            <Pagination totalPage={totalPage}/>
        </>
    );
}

export default BlogsByCategory;