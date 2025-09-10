import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import React from 'react'
import './sidebar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Sidebar = ({handleChange}) => {
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1><AiOutlineShoppingCart/> Filtering Ecommerce</h1>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </div>
  </section>
  </>
    
}

export default Sidebar