import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from './components/Navs';
import FooterComponent from './components/Footer';
import Home from './components/Home';
import Career from './components/Career';
import Contact from './components/Contact';
import About from './components/About';
import "./App.css"
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navs/>
        <Routes>
          <Route path="/" element={<Home  />} />
            <Route path="/career" element={<Career  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/contact" element={<Contact  />} />
          
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
