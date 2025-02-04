import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
return (
<div className='item'>
<Link to={`/product/${props.id}`}><img window={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
<p>{props.name}</p>
<div className='item__prices'>
<div className='item__price_new'>
${props.new_price}
</div>
<div className='item__price_old'>
${props.old_price}
</div>
</div>
</div>
)
}

export default Item