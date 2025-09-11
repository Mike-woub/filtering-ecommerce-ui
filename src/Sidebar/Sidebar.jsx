import React, { useRef } from 'react';
import CategoryFilter from './Category/CategoryFilter';
import Category from './Category/Category'; // ← brand filter
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './sidebar.css';

const Sidebar = ({
  handleBrandChange,
  handleCategoryChange,
  handleColorChange,
  handlePriceChange,
  resetFilters
}) => {
  const formRef = useRef();

  const handleReset = () => {
    resetFilters(); // reset state in App.jsx
    formRef.current.reset(); // reset radio buttons visually
  };

  return (
    <section className="sidebar">
      <form ref={formRef} className="logo-container">
        <CategoryFilter handleChange={handleCategoryChange} />
        <hr />

        <Category handleChange={handleBrandChange} />
        <hr />

        <Price handleChange={handlePriceChange} />
        <hr />

        <Colors handleChange={handleColorChange} />
        <hr />

        <button className="reset-btn" type="button" onClick={handleReset}>
          🔄 Reset Filters
        </button>
      </form>
    </section>
  );
};

export default Sidebar;
