import React,{useState, useRef} from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Header from "./components/header/Header";
import Dark from "./img/dark-img.png"
import Light from "./img/light-img.png"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import "./app.css"

function App() {
  const themeChange = useRef()
  const [dark, setDark] = useState(false)
  const darkHandle = () =>{
    themeChange.current.style.backgroundColor = "rgb(0 0 12)"
    if(dark === false){
      setDark(true)
      
    }
    else{
      themeChange.current.style.backgroundColor = "white"
      setDark(false)
    }
  }

  return (
    <Router>
      <div ref={themeChange}>
        <img onClick={darkHandle} className="theme" src={dark ? Light: Dark} alt="" />
        <Header theme = {dark} />
        <Routes>

          <Route path="/" element={<Intro theme={dark} />} />
          <Route path="/about" element={<About theme={dark} />} />
          <Route path="/product" element={<ProductList theme={dark} />} />
          <Route path="/contact" element={<Contact theme={dark} />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
