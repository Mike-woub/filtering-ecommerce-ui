import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/sidebar'

//Database
import products from './db/data'
import Category from './Sidebar/Category/Category'
import Card from './components/Card'

const App = () => {
  const [selectedCategory, setSelectedCategory]=useState(null)
  // ------Input Filter------
  const [query, setQuery]=useState("");
  
  const handleInputChange = event =>{
    setQuery(event.target.value)
  }
const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
);

  // ------Radio Filter------

  const handleChange =event=>{
    setSelectedCategory(event.target.value)
  }

    // ------Buttons Filter------
    const handleClick=event=>{
      setSelectedCategory(event.target.value)
    }

    function filteredData(products,selected,query){
      let filteredProducts =products

      //filtering Input Items
      if (query){
        filteredProducts=filteredItems
      }

      //Selected Filter
      if (selected){
        filteredProducts =filteredProducts.filter(({category, color, company,newPrice, title}) => category === selected || color === selected || company === selected ||newPrice ===selected || title === selected);
      }

      return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice})=>
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice} 
      prevPrice={prevPrice}

      />
      )
    }

    const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Nav query ={query} handleInputChange={handleInputChange}/>
      <Sidebar handleChange={handleChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    
    </div>
  )
}

export default App