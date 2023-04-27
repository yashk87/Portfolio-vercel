import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Header from "./components/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import "./app.css"

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>

          <Route path="/Portfolio" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
