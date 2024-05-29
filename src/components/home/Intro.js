import React from "react";
import '../../App.css';
import './Intro.css';

function Intro(){
    return(
        <div className='intro-container'>
            <div className='text-box'>
                <h1> Hello! My name is Jay.</h1>
                <text>
                    <br/>
                    I'm a soon-to-be fourth year Computer-Science specialist at the University of Toronto. <br/>
                    As an intern at Amazon, I enjoy having an active lifestyle and always pushing myself to new limits. <br/>
                    This is a blog to keep track of this journey of self discovery, and to document everything I'm passionate about. Enjoy!<br/>
                </text>
            </div>
            <img className='img' alt='hello' src={'images/hello.jpg'}/>

        </div>
    )
}

export default Intro