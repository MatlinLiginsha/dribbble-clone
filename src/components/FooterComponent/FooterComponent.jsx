import React from 'react'
import logo from '/src/assets/images/Dribbble-Logo.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className='footer'>
        <div>
        <img src={logo} className='logo' alt="brand logo" />
      </div>
      <nav>
        <ul>
          <li><a href='/'>Find Designers</a></li>
          <li><a href='/'>Hire Talent</a></li>
          <li><a href='/'>Inspiration</a></li>
          <li><a href='/'>Advertising </a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Careers</a></li>
          <li><a href='/'>Support</a></li>
        </ul>
      </nav>
      <div>
        <FaTwitter/><FaFacebook/><FaInstagram/><FaPinterest/>
      </div>
    </div>
  )
}

export default FooterComponent