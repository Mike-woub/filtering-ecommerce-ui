import React from 'react'
import "./products.css"
import Card from '../components/Card'
import Cart from '../Cart/Cart'


const Products = ({result, cartItems, cartStatus, removeFromCart,showMessage}) => {
  return <>
  <section className='card-container'>
    {showMessage && <div className="cart-alert">{showMessage}</div>}
    {cartStatus ? (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} cartStatus={cartStatus} />
        ) : (
          result
        )}</section>
   
  </>
}

export default Products