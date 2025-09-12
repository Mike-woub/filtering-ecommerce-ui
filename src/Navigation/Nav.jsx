import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './nav.css';

const Nav = ({ query, handleInputChange, toggleCart }) => {

  return (
    <nav className="md:flex md:flex-row justify-around text-white flex flex-col ">
     
        <div className="flex flex-row items-center justify-center  gap-3 ">
          <span className='md:text-2xl sm:text-xl'>Filtering Ecommerce</span> <AiOutlineShoppingCart  className='md:text-2xl sm:text-xl'/> 
        </div>

      <div className="">
        <input
          type="text"
          className="bg-white md:p-3 sm:p-2 rounded-xl  text-black border-2 border-amber-400 md:placeholder:text-sm placeholder:text-xs placeholder:text-center placeholder:text-blue-950"
          placeholder="Enter Your Search Shoes"
          onChange={handleInputChange}
          value={query}
        />
      </div>
        <div className="cart-container">
          <h2 className='md:text-2xl sm:text-xl'>Your Cart</h2>
          <button className="cart-button" onClick={toggleCart}>
            <AiOutlineShoppingCart className="text-amber-400 md:text-4xl ml-1 cursor-pointer hover:text-amber-300 hover:scale-125 transition-all transform duration-300 sm:text-2xl" />
          </button>
        </div>
      
    </nav>
  );
};

export default Nav;
