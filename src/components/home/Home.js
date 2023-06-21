import React from 'react';
import '../../App.css';
import HeroSection from './HeroSection';
import Intro from "./Intro";
import Cards from "./Cards";

function Home () {
    return (
        <>
            <HeroSection/>
            <Intro/>
            <Cards/>
        </>
    );
}

export default Home;