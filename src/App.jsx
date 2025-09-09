import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/sidebar'

const App = () => {
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <Recommended/>
      <Products/>
    
    </div>
  )
}

export default App