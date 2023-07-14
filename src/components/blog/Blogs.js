import React from 'react';
import '../../App.css';
import Posts from "./Posts";
import Pagination from "./Pagination";
import {QUERY_BLOGS} from "../../graphql/Queries";
import useQueryPosts from "../../graphql/useQueryPosts";

export default function Blogs() {

    const {posts, error} = useQueryPosts({query: QUERY_BLOGS});
    if (error) return <h2>{error}</h2>
    return (
        <>
            <Posts posts={posts}/>
            <Pagination/>
        </>
    );
}