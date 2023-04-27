import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import Insta from "../../img/instagram.png"
import Linked from "../../img/linkedin.png"
import Git from "../../img/github.png"
import Twitter from "../../img/twitter.png"


const Contact = () => {
    const formRef = useRef()
    const [submitted,setSubmitted]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_exjsgik', 'template_mu7rz15', formRef.current, 'exzQCJmdgLFjgwoew')
        .then((result) => {
            console.log(result.text);
            setSubmitted(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c"><div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                srcSet="" className='c-icon' />
                                +91 7028718223
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                           yashkhairkar87@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Pune, Maharashtra, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Wanna get in touch with me, Fill the details below.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message'  name="message" ></textarea>
                        <button>Submit</button>
                        <h1>{submitted && "Thank You"}</h1>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/yash-khairkar-323328207/" target="_blank" rel="noopener noreferrer"><img src={Linked} alt="" className='links' /></a>
                            <a href="https://www.instagram.com/y_a_s_h_khairkar/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt=""  className='links' /></a>
                            <a href="https://github.com/yashk87" target="_blank" rel="noopener noreferrer"><img src={Git} alt=""  className='links' /></a>
                            <a href="https://twitter.com/yashkhairkar87?t=AKovAOggdwHDwrBDXXvGMQ&s=09" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt=""  className='links' /></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact