import React from 'react'
import './header.css';
import CTA from './cta'
import ME from '../../assests/photo3.jpg'
import HeaderSocials from './headersocials'

const Header = () => {
  return (
    <header>
    <div className='container header_container'>
    <h5>Hello I'm</h5>
        <h1>Kirti Kumar</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
        <img src={ME} alt='' />
        </div>
    </div>
    </header>
  )
}

export default Header