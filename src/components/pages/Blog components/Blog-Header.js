import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {request} from 'graphql-request'
import './Blog-Header.css'

const BlogHeader = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const { categories } = await request(
                'https://ca-central-1.cdn.hygraph.com/content/clin9ia78079n01ugb1jj7d3z/master',
                `
      {
        categories {
          name
          slug
        }
      }
    `
            );

            setCategories(categories);
        };

        fetchCategories();
    }, [])

    const {pathname} = useLocation();

    return (

        <header>
            <nav>
                <ul className='menu-lists'>
                    <Link to='/blog'>
                        <li className={`${pathname === '/' ? 'active' : ''}`}>ALL</li>
                    </Link>

                    {
                        categories?.map(category => (
                            <Link key={category.slug} to={`/blog/${category.slug}`}>
                                <li className={`/blog/${category.slug}` === pathname ? 'active' : ''}>
                                    {category.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default BlogHeader;