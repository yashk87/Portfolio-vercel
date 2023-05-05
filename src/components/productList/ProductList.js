import React, { useEffect, useRef } from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from '../../data'
// import html from "../../img/html.png"
// import css from "../../img/css.png"
// import js from "../../img/js.png"
// import react from "../../img/react.png"
// import mern from "../../img/mern.png"

const ProductList = (props) => {
  const change = useRef()
  const change1 = useRef()
  // const change3 = useRef()
  const theme = props.theme
  useEffect(() => {
    if(theme){
      change.current.style.color = "white"
      change1.current.style.color = "white"
      // change3.current.style.color = "white"
    }
    else{
      change.current.style.color = "black"
      change1.current.style.color = "black"
      // change3.current.style.color = "black"
    }

  },[theme])
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 ref={change} className="pl-title">Skills</h1>
      <p ref={change1} className="pl-desc">
       Hey i am pretty familiar with these technologies.
      </p>
      </div>
      <div className="pl-list">
  {products.map((item)=>(
    <Product key={item.id} img={item.img} />
  ))}
      </div>
    </div>
  )
}

export default ProductList