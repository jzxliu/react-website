import React from 'react';
import '../../App.css';
import HeroSection from './home components/HeroSection';
import Intro from "./home components/Intro";
import Cards from "./home components/Cards";

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