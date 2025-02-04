import React from 'react'
import'./breadcrum.css'
import arrow_icon from "../assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        ДОМОЙ <img src={arrow_icon} alt="" /> МАГАЗИН <img src={arrow_icon} alt="" />{product.cayegoru}
        <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum