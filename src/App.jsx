import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import Error from './components/pages/Error';
import projects from './projects.js';
import './components/styles/style.css';

function App() {
  return (
    <Router>
      <div>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio projects={projects} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Error" element={<Error />}/>
          
        </Routes>
        
        <Footer />
      </div>
    </Router>

  );
}

export default App;