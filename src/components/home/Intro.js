import React from "react";
import '../../App.css';
import './Intro.css';

function Intro(){
    return(
        <div className='intro-container'>
            <div className='text-box'>
                <h1> Hello! My name is Jack.</h1>
                <text>
                    <br/>
                    I'm a second year Computer-Science specialist at the University of Toronto. <br/>
                    Currently learning frontend development and UX design, while planning to focus in AI in the future. <br/>
                    This year I wanted to push new limits by constantly setting goals and challenges for myself,
                    striving for a fitter, happier and more productive lifestyle. <br/>
                    I have decided to make a blog to keep track of this journey of self discovery,
                    and to document everything I'm passionate about. Enjoy!<br/>
                </text>
            </div>
            <img className='img' alt='hello' src={'images/hello.jpg'}/>

        </div>
    )
}

export default Intro