import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import Shop from './Shop';
import Team from './Team';
import Home from './Home';
import About from './About';
import AboutProduct from "./AboutProduct";


function App() {

  return (
    <div>
      <Router>
        <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/shop" className='link'>Shop</Link>
        <Link to="/team" className='link'>Team</Link>
      
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/:title" element={<AboutProduct/>}/>
          
        </Routes>
      </Router>
    </div>
  )

}

export default App;