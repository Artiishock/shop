import React from 'react'
import './cartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
import '../assets/all_product'
const Cartitems = () => {  
    const {all_product,cartItems, removeFromeCart, getTotalCartAmout}= useContext(ShopContext);
  return (

  <div className='cartItems'>
    <div className='cartItems-format-main'>
        <p>Продукты</p>
        <p>Заголовок</p>
        <p>Цены</p>
        <p>Количество</p>
        <p>Общая</p>
        <p>Удалить</p>
    </div>
    <hr />
    {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return
            <div>
                <div className='cartItems-format cartItems-format-main'>
                <img src={e.image} alt="" className='cartItems-product_item'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remuv-item' src={remove_icon} alt="" onClick={()=>{removeFromeCart()}}/>
                </div> 
                <hr />
            </div>
        }
    return null;   
    })}
    <div className='cartitem-down'>
        <div className='cartitem-total'>
            <h1>всего в корзине</h1>
            <div>
                <div className='cartitem-total-item'>
                    <p>промежуточный итог</p>
                    <p>${getTotalCartAmout()}</p>
                </div>
                <div className='cartitem-total-item'>
                    <p>стоимость доставки</p>
                    <p>безплатно</p>
                </div>
                <hr />
                <div className='cartitem-total-item'>
                    <h3>Общая стоимость</h3>
                    <h3>${getTotalCartAmout()}</h3>
                </div>
            </div>
            <button>оформить заказ</button>
        </div>
        <div className='cartitem-promo'>
            <p>ваш промокод</p>
            <div className='cartitem-promodox'>
                <input type="text" placeholder='промокод' />
                <button>применить</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Cartitems