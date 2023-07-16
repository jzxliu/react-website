import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import './Pagination.css';

const Pagination = ({totalPage}) => {
    const location = useLocation();
    const [pageNumbers, setPageNumbers] = useState([]);

    const page = Number((new URLSearchParams(location.search)).get('page')) || 1;

    useEffect(()=>{
        if (totalPage <= 1) return;
        if (totalPage <= 5) {
            return setPageNumbers(Array(totalPage).fill(0).map((_, i) => i + 1));
        }

        let newArr = [];

        for (let index = 1; index <= 5; index++){
            if (page <= 2){
                newArr.push(index);
            }
            else if (page > 2 && page < totalPage - 2){
                newArr.push(page - 3 + index);
            }
            else if (page >= totalPage - 2){
                newArr.push(totalPage - 5 + index);
            }
        }
        setPageNumbers(newArr);

    },[totalPage, page])

    if (totalPage <= 1) return null;

    return (
        <div className='pagination'>
            <Link to={`?page=${page - 1 <= 1 ? 1: page - 1}`} className='prev-next'>
                <i className="fa-solid fa-arrow-left"/> Prev
            </Link>

            <ul className="numbers">
                {
                    pageNumbers.map(num =>(
                        <Link className='num' to={`?page=${num}`} key = {num}>
                            <li className={page === num? 'active' : ''}> {num} </li>
                        </Link>
                    ))
                }
            </ul>

            <Link to={`?page=${page + 1 >= totalPage ? totalPage : page + 1}`} className='prev-next'>
                <i className="fa-solid fa-arrow-right"/> Next
            </Link>
        </div>
    );
};

export default Pagination;