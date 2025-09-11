import React from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

const Card = ({img, title, star, reviews, prevPrice, newPrice, addToCart}) => {
  return (
     <section className="card">
           <div className="card-img-wrapper"><img src={img} alt={title} className='card-img' /></div>
           
           <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
             {star} {star} {star}{star} 
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                  <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag-icon">
                <BsFillBagHeartFill /> 
              </div>
            </section>
            
              <section className="add-to-cart">
                <button className='add-to-cart-btn' onClick = {addToCart}>Add to Cart</button>
              </section>
           </div>
        </section>
  )
}

export default Card