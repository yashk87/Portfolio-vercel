import React from 'react'
import "./product.css"
const Product = (props) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={props.img} alt="" className='p-img' />
      <div className='skill-out'><div className=''></div></div>
      </div>
  )
}

export default Product