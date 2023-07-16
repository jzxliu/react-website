import React from 'react';
import {Link} from "react-router-dom";
import './Posts.css';

const Posts = ({posts}) => {

    return (
        <div className='posts-container'>
            <div className="posts-wrapper">
                {
                    posts?.map(post => (
                        <div className='posts-box' key={post.id}>
                            <div className="posts-img">
                                <Link to={`/article/${post.slug}`}>
                                    <img src={post.coverPhoto.url} alt=""/>
                                </Link>

                                <div className="categories">
                                    {
                                        post.categories?.map(category => (
                                            <Link to={`/blog/${category.slug}`} key={category.id}
                                                  className='category' style={{background: category.color.css}}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="posts-text">
                                <div className="category-time">
                                    {
                                        post.categories?.map(category => (
                                            <Link to={`/blog/${category.slug}`} key={category.id}
                                                  className='post-category' style={{color: category.color.css}}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }

                                    <span className='published-time'>
                                    {new Date(post.datePublished).toDateString().slice(4)}
                                </span>
                                </div>

                                <Link to={`/article/${post.slug}`} className='posts-link'>
                                    <h3>{post.title}</h3>
                                    <p className='excerpt'>{post.description}</p>
                                </Link>
                            </div>


                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default Posts;