import React from 'react'
import './offers.css'
import Exlucive_img from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers__left'>
            <h1 className='exclu'>Exclusive</h1>
            <h1 className='offer-h1'>Offers For You</h1>
            <p>ONLY THE BEST SELLERS PRODYCTS</p>
            <button>try now</button>
        </div>
        <div className='offers__right'>
            <img src={Exlucive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers