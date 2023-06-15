import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        J's Time Machine <i className="fa-solid fa-ghost"/>
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
                    <li className="nav-item">
                        <Link to='/blog' className='nav-links' onClick={closeMobileMenu} >
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu} >
                            Projects
                        </Link>
                    </li>
                    <div className="media-display">
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
                    </div>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;