import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <a href="http://localhost:5173/" target="_blank">
    <img src={assets.logo} alt="Footer Logo" />
</a>
            <p>"Bringing You Premium & Delicious Flavors, Straight from Our Kitchen to Your Doorstep!".</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>CALL SUPPORT</h2>
            <ul>
            <li>+91 9929852769</li>
                <li>+91 9119251819</li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>MAIL US AT</h2>
            <ul>

                <li>ayushmeel22@gmail.com</li>
                <li>gautamjangir8952@gmail.com</li>
                
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Saffron.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
