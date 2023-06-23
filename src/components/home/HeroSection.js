import React, {useRef} from "react";
import '../../App.css';
import './HeroSection.css';
import {Button} from "../Button";
import {Background, Parallax} from "react-parallax";

function HeroSection(){

    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView({behavior: 'smooth'})

    return(
        <>
            <Parallax strength={-1000} >
                <Background className="custom-bg">
                </Background>
                <div className="hero-container">
                    <h1>Welcome to the Machine</h1>
                    <p>Look up at the stars and not down at your feet.</p>

                    <div className='hero-btns'>
                        <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            onClick={executeScroll}
                        >
                            GET STARTED
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            link='/blog'
                        >
                            WHAT'S NEW?
                        </Button>
                    </div>
                </div>
            </Parallax>
            <div className='ref-div' ref={ref}></div>
        </>
    );
}

export default HeroSection;