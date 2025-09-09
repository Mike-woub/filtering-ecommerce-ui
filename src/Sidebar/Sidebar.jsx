import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import React from 'react'
import './sidebar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Sidebar = () => {
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1><AiOutlineShoppingCart/></h1>
        <Category/>
        <Price/>
        <Colors/>

    </div>
  </section>
  </>
    
}

export default Sidebar