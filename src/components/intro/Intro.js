import React, { useEffect, useRef } from 'react'
import "./intro.css"
import Me from "../../img/myimg.jpg"
const Intro = (props) => {
  const change = useRef()
  const change2 = useRef()
  const change3 = useRef()
const theme = props.theme
useEffect(() =>{
 if(theme){
  change.current.style.color = "white"
  change2.current.style.color = "white"
  change3.current.style.color = "white"
 }
 else{
  change.current.style.color = "black"
  change2.current.style.color = "black"
  change3.current.style.color = "black"
 }
}, [theme])

  return (
     <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 ref={change2} className="i-intro">Hello, My name is</h2>
          <h1 ref={change3} className="i-name">Yash Khairkar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">Graphic Designer</div>
              <div className="i-title-item">Editor</div>
              <div className="i-title-item">Typist</div>
              <div className="i-title-item">Gamer</div>
            </div>
                </div>
                <p ref={change} className="i-desc">
                        I Can Develop better UI for better UX.
                    </p>
            </div>
        </div>
        <div className='i-right'>
            <img src={Me} alt="" className='i-img' /></div>
    </div>
  )
}

export default Intro