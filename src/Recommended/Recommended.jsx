import React from 'react';
import './recommended.css';
import Button from '../components/Button';

const Recommended = ({ handleBrandChange }) => {
  return (
    <div className="main-content">
      <h2 className="recommended-title">Recommended Brands</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleBrandChange} value="" title="All Products" />
        <Button onClickHandler={handleBrandChange} value="Nike" title="Nike" />
        <Button onClickHandler={handleBrandChange} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleBrandChange} value="Puma" title="Puma" />
        <Button onClickHandler={handleBrandChange} value="Vans" title="Vans" />
        <h1 style={{textAlign:'center', marginLeft:'150px'}}> Available Products</h1>
      </div>
       
    </div>
    
  );
};

export default Recommended;
