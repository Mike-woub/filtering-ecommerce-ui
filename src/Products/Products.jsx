import React from 'react';
import './products.css';
import Cart from '../Cart/Cart';

const Products = ({
  result,
  cartItems,
  cartStatus,
  removeFromCart,
  showMessage,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  toggleCart
}) => {
  return (
    <div className="scrollable-section">
      {showMessage && <div className="cart-alert">{showMessage}</div>}
      <section className="card-container">
        {cartStatus ? (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
            toggleCart={toggleCart}
          />
        ) : result && result.length > 0 ? (
          result
        ) : (
          <p className="no-results">No products match your filters.</p>
        )}
      </section>
    </div>
  );
};

export default Products;
