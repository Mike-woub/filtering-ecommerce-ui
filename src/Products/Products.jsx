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
    <div className="mt-24 absolute top-40 md:left-48 left-14 right-0 bottom-0 -z-10 text-white overflow-y-auto ml-20 scrollable-section ">
      {showMessage && <div className="fixed top-24 md:right-1.5 right-0 bg-green-600 text-white p-2 rounded z-50 animate-pulse text-xs md:text-lg ">{showMessage}</div>}
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
