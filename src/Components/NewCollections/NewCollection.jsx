import React from 'react'
import './newColection.css'
import new_collection from'../assets/new_collection'
import Item from '../items/Item'
const NewCollection = () => {
  return (
    <div className='new__collection'>
        <h1>НОВАЯ КОЛЛЕЦИЯ</h1>
        <hr />
        <div className='collection'>
            {new_collection.map((item, i)=>{
                return <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.img}
                new_price={item.new_price} 
                old_price= {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection