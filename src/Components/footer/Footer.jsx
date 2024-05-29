import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__logo'> 
        <img src={footer_logo} alt="" />
        <p>МАГАЗИН</p>
        </div>
          <ul className='footer__links'>
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contacts</li>
          </ul>
          <div className='footer__socials-icon'>
            <div className='footer__icons-container'>
              <img src={instagram_icon} alt="" />
            </div>
            <div className='footer__icons-container'>
              <img src={pintester_icon} alt="" />
            </div>
            <div className='footer__icons-container'>
              <img src={whatsapp_icon} alt="" />
            </div>
            
          </div>
          <div className='footer__copyeight'>
              <hr />
              <p>Copyright @ 2024 - all right reserved</p>
            </div>
    </div>
  )
}

export default Footer