import React, {useEffect, useState} from 'react';
import {request} from "graphql-request";
import {useParams} from "react-router-dom";
import "./Article.css"
import {useMyContext} from "./Store";

const Article = () => {
    const {slug} = useParams()
    const [article, setArticle] = useState([]);

    const { setLoading } = useMyContext();

    useEffect(()=>{
        const fetchPosts = async () => {
            const { posts } = await request(
                'https://ca-central-1.cdn.hygraph.com/content/clin9ia78079n01ugb1jj7d3z/master',
                `
          {
          posts(where: {_search: "${slug}"}){
            id
            title
            datePublished
            slug
            coverPhoto{
              url
            }
            content {
              html
            }
          }
        }
        `
            );

            setArticle(posts);
        };

        setLoading(true);
        fetchPosts().finally(() => setLoading(false));
    }, [slug, setLoading])

    return (
        <div className='article-container'>
            {
                article?.map(article =>(
                    <React.Fragment key={article.id}>
                        <article>
                            <div className="cover-container">
                                <img src={article.coverPhoto.url} alt=""/>
                            </div>
                            <h2 className="title">{article.title}</h2>
                            <div className="published-time">
                                <i className="far fa-clock"></i>
                                <span>{new Date(article.datePublished).toDateString().slice(4)}</span>
                            </div>

                            <div className="content" dangerouslySetInnerHTML={{__html:article.content.html}}>

                            </div>
                        </article>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default Article;