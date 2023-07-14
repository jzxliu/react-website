import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useMyContext} from "../components/blog/Store";
import {request} from "graphql-request";
import {QUERY_URL} from "./Queries";

const useQueryPosts = ({query}) => {
    const {slug} = useParams();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);

    const {setLoading} = useMyContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const {posts} = await request(
                    QUERY_URL,
                    query,
                    {slug}
                );
                setPosts(posts);
                setError(null);
            } catch (error) {
                setError(error.message);
                setPosts([]);
            }
        };
        setLoading(true);
        fetchPosts()
            .finally(() => setLoading(false));
    }, [query, slug, setLoading])
    return {posts, error}
};

export default useQueryPosts;