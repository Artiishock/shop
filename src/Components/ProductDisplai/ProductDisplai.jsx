import React, {useContext} from 'react'
import './productdisplai.css'
import star_dull_icon from'../assets/star_dull_icon.png'
import star_icon from'../assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplai = (props) => {
  const {product}=props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplai'>
      <div className='productdisplai-left'>
      <div className="productdisplai_img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className='productdisplai_img'>
        <img className='productdisplai_main-img' src={product.image} alt="" />
      </div>
      </div>
      <div className="productdisplai_right">
        <h1>{product.name}</h1>
        <div className="productdisplai_right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(1234)</p>
        </div>
        <div className='productdisplai_right-prices'>
        <div className="productdisplai_right-prices-old">
        ${product.old_price}
      </div>
      
       <div className="productdisplai_right_price-new">
            ${product.new_price}
          </div>
          </div>
          <div className="productdisplai_right-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque minus, beatae similique, quos aperiam fugit maxime dicta veniam iusto ducimus earum iste, officiis assumenda non dolor magnam temporibus repudiandae asperiores. Facere, eligendi laborum ducimus voluptates quibusdam consequatur atque eaque harum voluptatum? Ea cumque nisi et veritatis doloribus voluptatum obcaecati laborum soluta praesentium, quis, maxime voluptates nostrum, sequi nobis ipsa. Maxime molestias aperiam repudiandae veniam omnis laborum sit modi consectetur quia dolorum, at harum ducimus quam id repellendus minima commodi distinctio? Sed mollitia, minima dolorum perspiciatis error sequi consequatur deserunt architecto numquam magni vitae voluptatum earum cupiditate. Voluptatibus, natus eius.
          </div>
          <div className="productdisplai_right-size">
            <h1>select Size</h1>
            <div className="productdisplai_right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
          <p className='productdisplai_right-category'>
            <span>Category:</span>
            Women,T-Shirt
          </p>
          <p className='productdisplai_right-category'>
            <span>Tags:</span>
            Modern,Latest
          </p>
        </div>  
      </div>
  )}

export default ProductDisplai