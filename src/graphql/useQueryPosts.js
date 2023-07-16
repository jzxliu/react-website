import {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {useMyContext} from "../components/blog/Store";
import {request} from "graphql-request";
import {QUERY_URL} from "./Queries";

const useQueryPosts = ({query, limit= 8}) => {
    const {slug} = useParams();
    const location = useLocation();

    const page = Number((new URLSearchParams(location.search)).get('page')) || 1;
    const skip = (page - 1) * limit;

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState([]);

    const {setLoading, setTotalPage} = useMyContext();

    useEffect(() => {
        setTotalPage(1);
    }, [setTotalPage])

    useEffect(()=>{
        setLoading(true);
        const fetchPosts = async () => {
            try {
                const {posts, countConnection} = await request(
                    QUERY_URL,
                    query,
                    {slug, limit, skip}
                );
                const count = countConnection?.aggregate?.count || 0;
                setTotalPage(Math.ceil(count / limit));
                setPosts(posts);
                setError(null);
            } catch (error) {
                setTotalPage(1);
                setError(error.message);
                setPosts([]);
            }
        };
        fetchPosts()
            .finally(() => setLoading(false));
    }, [query, slug, limit, skip, setLoading, setTotalPage])
    return {posts, error}
};

export default useQueryPosts;