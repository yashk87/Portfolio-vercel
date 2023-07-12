import React,{useRef , useEffect} from 'react'
import Weather from "../../img/weather.png"
import Portfolio from "../../img/briefcase.png"
import Calculator from "../../img/calculator.png"
import Record from "../../img/analysis.png"
import "./project.css"
import {Link} from "react-router-dom"

function Project(props) {
  const change = useRef()
  const change2 = useRef()
  const change3 = useRef()
  const change4 = useRef()
  const change5 = useRef()
  const theme = props.theme

  useEffect(() =>{
    if(theme){
      change.current.style.color ="white"
      change2.current.style.color ="white"
      change3.current.style.color ="white"
      change4.current.style.color ="white"
      change5.current.style.color ="white"
    }
    else{
      change.current.style.color = "black"
      change2.current.style.color = "black"
      change3.current.style.color = "black"
      change4.current.style.color = "black"
      change5.current.style.color = "black"
    }
  })

  return (
    <div className='project-div'>
      <h1 ref={change4} className='heading'>Here are some of my Projects</h1>
      <div className='flex'>
      <Link className='link' to= "https://live-weather-appyk.netlify.app/">
      <div className='border1'>
        <img className='img' src={Weather}alt="" />
        <h2 ref={change} className='title'>Weather App (PWA)</h2>
      </div>
      </Link>
      <Link className='link' to= "https://portfolio-yk.netlify.app/">
      <div className='border1'>
        <img className='img' src={Portfolio}alt="" />
        <h2 ref={change2} className='title'>Personal Portfolio</h2>
       
      </div>
      </Link>
      <Link className='link' to= "https://calculator-yk.netlify.app/">
      <div className='border1'>
        <img className='img' src={Calculator}alt="" />
        <h2 className='title' ref={change3}>Basic Calculator</h2>
       
      </div>
      </Link>
      <Link className='link' to= "https://extraordinary-parfait-1e8a77.netlify.app/">
      <div className='border1'>
        <img className='img' src={Record}alt="" />
        <h2 className='title' ref={change5}>Record Handler</h2>
       
      </div>
      </Link>
      
      </div>

      
    </div>
  )
}

export default Project