import React, { useState } from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import "./nav.css";

const Nav = ({query, handleInputChange, toggleCart}) => {
 
  return <nav>
    <h1><AiOutlineShoppingCart/> Filtering Ecommerce</h1>
    <div className="nav-container">
      <input type="text" className='search-input' placeholder='Enter your search shoes' onChange={handleInputChange} value={query}/>
    </div>
     
    <div className="cart-container">
      <h2>Your Cart</h2>
      <a href="#">
        <AiOutlineShoppingCart className='nav-icons' onClick={toggleCart}/>
      </a>
   

    </div>
  </nav>

}

export default Nav