import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./component/features/Header";
import Footer from "./component/features/Footer";
import CityDescription from "./pages/city/CityDescription";
import Education from "./pages/education/Education";
import Populations from "./pages/populations/Populations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crime from "./pages/crime/Crime";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/education" element={<Education />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/populations" element={<Populations />} />
        <Route path="/city/:id" element={<CityDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
