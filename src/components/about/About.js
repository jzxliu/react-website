import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <h1>About this site</h1>
            <p>
                This site is developed using React.js framework <br/>
                Using GraphQL as database for blog posts<br/>
                Hosted for free using Netlify <br/>
                Many blogs are unfinished because I added them to test features. <br/>
                I'm working on finishing all the blogs and writing new blogs in my free time.
            </p>
        </div>
    );
}

export default About;