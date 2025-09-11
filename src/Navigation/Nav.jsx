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
    <div className="profile-container">
      <a href="#">
        <FiHeart className='nav-icons'/>
      </a>
      <a href="#">
        <AiOutlineShoppingCart className='nav-icons' onClick={toggleCart}/>
      </a>
      <a href="#">
        <AiOutlineUserAdd className='nav-icons'/>
      </a>

    </div>
  </nav>

}

export default Nav