import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from "./Dropdown";
import Search from "./Search";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <div className="navbar-logo-text">
                            Jack's Time Machine
                        </div>
                        <i className="fa-solid fa-ghost"/>
                    </Link>
                </div>
                <div className='menu-icon' onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/blog' className='nav-links' onClick={closeMobileMenu} >
                            Blog
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                            About
                        </Link>
                    </li>
                    <div className="media-display">
                        <Link
                            class='social-icon-link email'
                            to='mailto:jacks.liu@mail.utoronto.ca'
                            target='_blank'
                            aria-label='Email'
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </Link>

                        <Link
                            to='https://www.instagram.com/jzxliu/'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            <i className="fa-brands fa-instagram"/>
                        </Link>

                        <Link
                            to='https://open.spotify.com/user/ez0xpfhfna9e7qllhbi1j8t4y?si=fe9d15fccdad4cf6'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            <i className="fa-brands fa-spotify"></i>
                        </Link>

                        <Link
                            to='https://www.youtube.com/channel/UC5Xp38FLIDTffylAFaAp9Zg'
                            class='social-icon-link youtube'
                            onClick={closeMobileMenu}
                        >
                            <i className='fab fa-youtube' />
                        </Link>

                    </div>
                    <div className="search-container">
                        <Search/>
                    </div>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;