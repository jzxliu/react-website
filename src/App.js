import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Blogs from "./components/pages/Blog components/Blogs";
import Footer from "./components/Footer";
import BlogsByCategory from "./components/pages/Blog components/BlogsByCategory";
import BlogsBySearch from "./components/pages/Blog components/BlogsBySearch";
import Article from "./components/pages/Blog components/Article";

function App() {
  return (
      <>
          <Router>
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
