import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <h1>About this site</h1>
            <p>
                This site is developed using React.js <br/>
                Using GraphQL as database <br/>
                and hosted using Netlify
            </p>
        </div>
    );
}

export default About;