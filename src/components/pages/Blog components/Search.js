import React, {useState} from 'react';

const Search = () => {

    const [search, setSearch] = useState('')

    return (
        <form className='search'>
            <input type='search' placeholder='Search...' required
            value={search} onChange={e => setSearch(e.target.value)}/>

            <button type='submit'>
                <i className='fa fa-search'></i>
            </button>
        </form>
    );
}

export default Search;