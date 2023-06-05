import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Routes>
                  <Route path='/'>
                      <Route index element={<Home/>}/>
                  </Route>
              </Routes>
          </Router>
      </>
  );
}

export default App;
