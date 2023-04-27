import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import Menu from "../../img/menu.png"
import { useRef } from 'react'
import Close from "../../img/cancel.png"

const Header = () => {
    const change = useRef()
    const open = useRef()
    const close = useRef()
    const toggle = () => {
        let current = change.current.style.transform
        if(current === "translateX(0px)"){
        
            change.current.style.transform="translateX(-500px)"
            close.current.style.display="none";
            open.current.style.display="block";
        }
        else{
            close.current.style.display="block";
            open.current.style.display="none"
            change.current.style.transform="translateX(0)"
        }

    }
    return (
        <>
        <img ref={open} onClick={toggle} className='hide-show' src={Menu} alt="" />
        <img ref={close} onClick={toggle} className='cancel' src={Close} alt="" />
        <div  ref={change} className='navBar'>
            
          <ul>
            
            <Link className='Link noSelect' to={"/Portfolio"}><li>Home</li></Link>
            <Link className='Link noSelect' to={"/about"}><li>About Me</li></Link>
            <Link className='Link noSelect' to={"/product"}><li>Skills</li></Link>
            <Link className='Link noSelect' to={"/contact"}><li>Contact</li></Link>
          </ul>
        </div>
        </>
    )
}

export default Header