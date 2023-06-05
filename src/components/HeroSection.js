import React from "react";
import '../App.css';
import './HeroSection.css';
import {Button} from "./Button";
import {Background, Parallax} from "react-parallax";

function HeroSection(){
    return(
        <>
            <Parallax strength={-1000} >
                <Background className="custom-bg">
                </Background>
                <div className="hero-container">
                    <h1>Welcome to the Machine</h1>
                    <p>Do not go gentle into that good night.</p>

                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >
                            PLACEHOLDER 1
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            PLACEHOLDER 2
                        </Button>
                    </div>
                </div>
            </Parallax>
        </>
    );
}

export default HeroSection;