import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Kirti Kumar</a>

      <ul className='permalinks'>
      <li><a href='#'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#skill'>SKILLS</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        {/* <li><a href="#testimoials">TESTIMONIALS</a></li> */}
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://www.facebook.com/kirti.kumar.946954'><FaFacebookF/></a>
      <a href='https://www.instagram.com/elpha_019'><FiInstagram/></a>
      <a href='https://twitter.com/KIRTIKUMAR019'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Kirti Kumar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer