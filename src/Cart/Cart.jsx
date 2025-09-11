import React from 'react';
import './cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.newPrice), 0);

  return (
    <section className="cart-wrapper">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="img-wrapper">
                <img src={item.img} alt={item.title} className="cart-img" /></div>
                <div className="cart-info">
                  <p>{item.title}</p>
                  <p>${item.newPrice}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </section>
  );
};

export default Cart;
