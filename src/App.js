import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Blog from "./components/pages/Blog";

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/'>
                      <Route index element={<Home/>}/>
                      <Route path={'/blog'} element={<Blog/>}/>
                  </Route>
              </Routes>
          </Router>
      </>
  );
}

export default App;
