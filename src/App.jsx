import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/sidebar'

//Database
import products from './db/data'
import Category from './Sidebar/Category/Category'
import Card from './components/Card'
import Cart from './Cart/Cart'


const App = () => {
  const [selectedCategory, setSelectedCategory]=useState(null);
  const [cartItems, setCartItems]=useState([]);
   const [cartStatus, setCartStatus]=useState(false);
   const [showMessage, setShowMessage] = useState('');

  //addToCart Function
  const addToCart = (product) => {
  const alreadyInCart = cartItems.some(item => item.title === product.title);

  if (alreadyInCart) {
    setShowMessage('Already added to cart!');
  } else {
    setCartItems([...cartItems, product]);
    setShowMessage('Added to cart!');
  }

  // Clear message after 3 seconds
  setTimeout(() => setShowMessage(''), 3000);
};

 //removeFromCart Function 
 const   removeFromCart = (index) => {
  setCartItems(cartItems.filter((_, i) => i !== index));
};


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
      addToCart={() => addToCart({ img, title, newPrice })}

      />
      )
    }

    const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Nav query ={query} handleInputChange={handleInputChange} cartStatus={cartStatus} toggleCart={() => setCartStatus(prev => !prev)} />
      <Sidebar handleChange={handleChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}  cartStatus={cartStatus}
  cartItems={cartItems} removeFromCart={removeFromCart} showMessage={showMessage}/>
    </div>
  )
}

export default App