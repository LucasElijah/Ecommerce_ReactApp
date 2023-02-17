import { Facebook, Google, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Keep In Touch With Us</span>
        <div className="mail">
          <input type="text" placeholder='Enter your Email Address Here' />
          <button>Join Us!</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  )
}

export default Contact