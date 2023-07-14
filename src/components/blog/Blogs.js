import React, {useEffect, useState} from 'react';
import {request} from 'graphql-request'
import '../../App.css';
import Posts from "./Posts";
import {useMyContext} from "./Store";
import Pagination from "./Pagination";
import {QUERY_BLOGS, QUERY_URL} from "../../graphql/Queries";

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const {setLoading} = useMyContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            const { posts } = await request(
                QUERY_URL,
                QUERY_BLOGS
            );

            setPosts(posts);
        };
        setLoading(true);
        fetchPosts()
            .then(() => {
                }
            )
            .catch()
            .finally(() => setLoading(false));
    }, [setLoading])

    return (
        <>
            <Posts posts={posts}/>
            <Pagination/>
        </>
    );
}