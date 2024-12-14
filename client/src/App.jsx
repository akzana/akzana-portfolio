import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from './pages/AboutPage/AboutPage.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route link="/" element={HomePage} />
        <Route link="/about" element={AboutPage} />
      </Routes>
    </Router>
  )
}
