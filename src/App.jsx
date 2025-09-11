import React, { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/sidebar';

// Database
import products from './db/data';
import Card from './components/Card';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [query, setQuery] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  // Add to cart
  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex(item => item.title === product.title);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
      setShowMessage('Quantity updated!');
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setShowMessage('Added to cart!');
    }
    setTimeout(() => setShowMessage(''), 800);
  };

  // Quantity controls
  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    } else {
      removeFromCart(index);
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
    setShowMessage('Cart cleared!');
    setTimeout(() => setShowMessage(''), 2000);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedColor(null);
    setSelectedPrice(null);
    setQuery('');
    setCartStatus(false);
  };

  // Filter handlers
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCartStatus(false);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setCartStatus(false);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    setCartStatus(false);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    setCartStatus(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCartStatus(false);
  };

  // AND logic filtering including category
  function filteredData(products, query, brand, color, price, category) {
    let filtered = products;

    // Apply search filter
    if (query) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply filters only if they exist — all must match
    filtered = filtered.filter(product => {
      const matchesBrand = !brand || product.company.toLowerCase() === brand.toLowerCase();
      const matchesColor = !color || product.color.toLowerCase() === color.toLowerCase();
      const matchesPrice = !price || Number(product.newPrice) === Number(price);
      const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();

      return matchesBrand && matchesColor && matchesPrice && matchesCategory;
    });

    return filtered.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        addToCart={() => addToCart({ img, title, newPrice })}
      />
    ));
  }

  const result = filteredData(products, query, selectedBrand, selectedColor, selectedPrice, selectedCategory);

  return (
    <div>
      <Nav
        query={query}
        handleInputChange={handleInputChange}
        cartStatus={cartStatus}
        toggleCart={() => setCartStatus(prev => !prev)}
      />
      <Sidebar
        handleBrandChange={handleBrandChange}
        handleColorChange={handleColorChange}
        handlePriceChange={handlePriceChange}
        handleCategoryChange={handleCategoryChange}
        resetFilters={resetFilters}
      />
      <Recommended handleBrandChange={handleBrandChange} />
      <Products
        result={result}
        cartStatus={cartStatus}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        showMessage={showMessage}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        toggleCart={() => setCartStatus(prev => !prev)}
      />
    </div>
  );
};

export default App;
