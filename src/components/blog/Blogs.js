import React, {useEffect, useState} from 'react';
import {request} from 'graphql-request'
import '../../App.css';
import Posts from "./Posts";
import {useMyContext} from "./Store";

export default function Blogs() {
    const [posts, setPosts] = useState([]);

    const {setLoading} = useMyContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            const { posts } = await request(
                'https://ca-central-1.cdn.hygraph.com/content/clin9ia78079n01ugb1jj7d3z/master',
                `
          {
          posts(orderBy: datePublished_DESC){
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
          }
        }
        `
            );

            setPosts(posts);
        };
        setLoading(true);
        fetchPosts().finally(() => setLoading(false));
    }, [setLoading])

    return (
        <>
            <Posts posts={posts}/>
        </>
    );
}