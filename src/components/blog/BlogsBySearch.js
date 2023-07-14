import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {request} from "graphql-request";
import Posts from "./Posts";
import {useMyContext} from "./Store";
import {QUERY_BY_SEARCH, QUERY_URL} from "../../graphql/Queries";

const BlogsBySearch = () => {
    const {slug} = useParams()
    const [posts, setPosts] = useState([]);

    const {setLoading} = useMyContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            const { posts } = await request(
                QUERY_URL,
                QUERY_BY_SEARCH,
                {slug}
            );
            setPosts(posts);
        };
        setLoading(true);
        fetchPosts().finally(() => setLoading(false));
    }, [slug, setLoading])

    return (
        <>
            <Posts posts={posts}/>
        </>
    );
}

export default BlogsBySearch;