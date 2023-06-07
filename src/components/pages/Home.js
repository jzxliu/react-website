import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Intro from "../Intro";
import Cards from "../Cards";
import Footer from "../Footer";

function Home () {
    return (
        <>
            <HeroSection/>
            <Intro/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;