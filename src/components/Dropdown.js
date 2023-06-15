import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {request} from "graphql-request";
import './Dropdown.css';

const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

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
        <>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {
                    categories?.map(category => (
                        <li key={category.slug} className={`/blog/${category.slug}` === pathname ? 'active' : ''}>
                            <Link className={'dropdown-link'}
                                key={category.slug} to={`/blog/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Dropdown;