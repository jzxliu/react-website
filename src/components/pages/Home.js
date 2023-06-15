import React from 'react';
import '../../App.css';
import HeroSection from './home components/HeroSection';
import Intro from "./home components/Intro";
import Cards from "./home components/Cards";
import Footer from "../Footer";

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