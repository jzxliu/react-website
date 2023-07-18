import React, {useRef} from 'react';
import "./Article.css"
import {QUERY_POST} from "../../graphql/Queries";
import useQueryPosts from "../../graphql/useQueryPosts";

const Article = () => {


    const {posts, error} = useQueryPosts({query: QUERY_POST});

    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView({behavior: 'smooth'})

    if (error) return <h2>{error}</h2>
    return (
        <div className='article-container'>
            {
                posts?.map(posts =>(
                    <React.Fragment key={posts.id}>
                        <article onLoad={executeScroll}>
                            <div className="cover-container">
                                <img src={posts.coverPhoto.url} alt=""/>
                            </div>
                            <div className='article-ref-div' ref={ref}></div>
                            <h2 className="title">{posts.title}</h2>
                            <div className="published-time">
                                <i className="far fa-clock"></i>
                                <span>{new Date(posts.datePublished).toDateString().slice(4)}</span>
                            </div>

                            <div className="content" dangerouslySetInnerHTML={{__html:posts.content.html}}>

                            </div>
                        </article>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default Article;