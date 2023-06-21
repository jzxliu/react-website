import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import Blogs from "./components/blog/Blogs";
import Footer from "./components/Footer";
import BlogsByCategory from "./components/blog/BlogsByCategory";
import BlogsBySearch from "./components/blog/BlogsBySearch";
import Article from "./components/blog/Article";
import Loading from "./components/blog/Loading";
import {useMyContext} from "./components/blog/Store";

function App() {

    const { loading } = useMyContext();

    return (
        <>
            <Router>
                {loading && <Loading/>}
                <Navbar />
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>}/>
                        <Route path={'/blog'} element={<Blogs/>}/>
                        <Route path={'/blog/:slug'} element={<BlogsByCategory/>}/>
                        <Route path={'/search/:slug'} element={<BlogsBySearch/>}/>
                        <Route path={'/article/:slug'} element={<Article/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
