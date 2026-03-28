import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admission from './pages/Admission';
import About from './pages/about';
import Vidieo from './pages/vidieo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/vidieo" element={<Vidieo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;