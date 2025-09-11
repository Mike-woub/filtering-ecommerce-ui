import React from 'react'
import "./products.css"
import Card from '../components/Card'
import Cart from '../Cart/Cart'

const Products = ({ result, cartItems, cartStatus, removeFromCart, showMessage }) => {
  return (
    <div className="scrollable-section">
      {showMessage && <div className="cart-alert">{showMessage}</div>}
      <section className="card-container">
        {cartStatus ? (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} cartStatus={cartStatus} />
        ) : (
          result
        )}
      </section>
    </div>
  )
}

export default Products
