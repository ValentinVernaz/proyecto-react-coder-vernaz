// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Mi Sitio</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/seccion1">Sección 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/seccion2">Sección 2</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/seccion3">Sección 3</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/seccion4">Sección 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Bienvenido a la Página Principal</h2>} />
          <Route path="/seccion1" element={<Section1 />} />
          <Route path="/seccion2" element={<Section2 />} />
          <Route path="/seccion3" element={<Section3 />} />
          <Route path="/seccion4" element={<Section4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
