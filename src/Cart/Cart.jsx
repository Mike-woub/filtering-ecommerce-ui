import React from 'react';
import './cart.css';

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, toggleCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.newPrice), 0);

  return (
    <section className="cart-wrapper">
          <button className="back-btn" onClick={toggleCart}>← Back to Products</button>
      <h2 style={{marginBottom:"15px"}}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
       
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="img-wrapper">
                  <img src={item.img} alt={item.title} className="cart-img" />
                </div>
                <div className="cart-info">
                  <p>{item.title}</p>
                  <p>${item.newPrice}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => increaseQuantity(index)}>+</button>
                    <button onClick={() => decreaseQuantity(index)} disabled={item.quantity === 1}>-</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          </div>
          </div>
          
        </>
      )}
    </section>
  );
};

export default Cart;
