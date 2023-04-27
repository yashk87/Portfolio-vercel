import React from 'react'
import "./intro.css"
import Me from "../../img/myimg.jpg"
const Intro = () => {
  return (
     <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Yash Khairkar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Developer</div>
              <div className="i-title-item">Graphic Designer</div>
              <div className="i-title-item">Editor</div>
              <div className="i-title-item">Typist</div>
              <div className="i-title-item">Gamer</div>
            </div>
                </div>
                <p className="i-desc">
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