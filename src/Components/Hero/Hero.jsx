import React from 'react'
import './hero.css'
import Hand_icon from '../assets/hand_icon.png';
import Arrow_icon from '../assets/arrow.png';
import Hero_image from '../assets/hero_image.png';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left'>
            <h2>Новое поступление</h2>
            <div>
            <div className='hero__icon'></div>
                <p>НОВОЕ</p>
                <img src={Hand_icon} alt="" />
            </div>
            <div>
            <p>коллекции</p>
            <p>для всех</p>
            </div>
            <div className='hero__latest_btn'>
                <div>свежая колекция</div>
                <img src={Arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero__right'>
            <img src={Hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero