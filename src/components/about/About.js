import React, { useEffect, useRef } from 'react'
import "./about.css"
import Tech from "../../img/about.jpg";
const About = (props) => {
  const theme = props.theme
  const change = useRef()
  const change1 = useRef()
  const change3 = useRef()
  useEffect(() =>{
    if(theme){
      change.current.style.color = "white"
      change1.current.style.color = "white"
      change3.current.style.color = "white"
    }
    else{
      change.current.style.color = "black"
      change1.current.style.color = "black"
      change3.current.style.color = "black"
    }
  },[theme])
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <div className='border'>
                <img src={Tech} alt="" className='a-img' />
                </div>
            </div>
        </div>
        <div className="a-right">
          <h1 ref={change}  className='a-title'>About Me</h1>
          <p ref={change3} className="a-sub">
            A Short intro of mine
          </p>
          <p ref={change1} className="a-desc">
           Hey Yash here,<br></br> Currently I am pursuing my Bachelor Degree in Engineering at Jspm's Rajarshi Shahu College of Engineering, Pune. 
           proper from Paratwada, Amaravati dist. I am fond of playing sports,
            Making digital Arts, Editing Photos, I enjoy Working on Projects based on web applications
            as well (especially front-end), I Always try to maintain userfriendly interface throughout,
            trying of maintaining this pace and looking forward to learn & grasp more concepts.<br></br> 
          </p>
        </div>
    </div>
  )
}

export default About