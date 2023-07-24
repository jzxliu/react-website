import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-media-text'>
                        Feel free to connect with me!
                    </div>
                    <div className='social-icons'>
                        <Link
                            class='social-icon-link email'
                            to='mailto:jacks.liu@mail.utoronto.ca'
                            target='_blank'
                            aria-label='Email'
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/jzxliu/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>

                        <Link
                            to='https://open.spotify.com/user/ez0xpfhfna9e7qllhbi1j8t4y?si=fe9d15fccdad4cf6'
                            className='nav-links-mobile'
                            target='_blank'
                            aria-label='Spotify'
                        >
                            <i className="fa-brands fa-spotify"></i>
                        </Link>

                        <Link
                            class='social-icon-link youtube'
                            to='https://www.youtube.com/channel/UC5Xp38FLIDTffylAFaAp9Zg'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link github'
                            to='https://github.com/jzxliu'
                            target='_blank'
                            aria-label='github'
                        >
                            <i className="fa-brands fa-github"></i>
                        </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/jackliu-/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;