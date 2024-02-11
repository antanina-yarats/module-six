import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import Contact from './Contact';
import Team from './Team';
import Home from './Home';
import AboutProduct from "./AboutProduct";


function App() {

  return (
    <div>
      <Router>
        <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/contact" className='link'>Contact</Link>
        <Link to="/team" className='link'>Team</Link>
      
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/:title" element={<AboutProduct/>}/>   
        </Routes>
      </Router>
    </div>
  )

}

export default App;