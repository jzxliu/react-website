import React, {useEffect, useState} from 'react';
import {request} from 'graphql-request'
import '../../../App.css';
import BlogHeader from "./Blog-Header";
import Posts from "./Posts";
import Search from "./Search";

export default function Blogs() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
            const { posts } = await request(
                'https://ca-central-1.cdn.hygraph.com/content/clin9ia78079n01ugb1jj7d3z/master',
                `
          {
          posts(orderBy: datePublished_ASC){
            id
            title
            datePublished
            slug
            content {
              html
            }
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

        fetchPosts();
    }, [])

    return (
        <>
            <BlogHeader/>
            <Search/>
            <Posts posts={posts}/>
        </>
    );
}