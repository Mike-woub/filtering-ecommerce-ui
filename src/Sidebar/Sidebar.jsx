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
        <Category handleChange={handleChange}/>
        <hr />
        <Price handleChange={handleChange}/>
        <hr />
        <Colors handleChange={handleChange}/>
        
    </div>
  </section>
  </>
    
}

export default Sidebar