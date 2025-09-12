import React from 'react';
// import './recommended.css';
import Button from '../components/Button';


const Recommended = ({ handleBrandChange }) => {
  return (
    <div className="flex flex-col text-center justify-center fixed top-24 md:left-20 left-0 w-full ">

      <h2 className="md:text-2xl text-lg text-teal-50 md:mb-2 md:mt-2 mt-5">Recommended Brands</h2>
      <div className="flex flex-row  lg:gap-8 md:gap-6 sm:gap-4 gap-2 w-full justify-center pl-8 pr-8 mt-5">
        <Button onClickHandler={handleBrandChange} value="" title="All Products" />
        <Button onClickHandler={handleBrandChange} value="Nike" title="Nike" />
        <Button onClickHandler={handleBrandChange} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleBrandChange} value="Puma" title="Puma" />
        <Button onClickHandler={handleBrandChange} value="Vans" title="Vans" />
      </div>
       <h1 className='text-center mt-4 md:text-2xl text-lg text-white'> Available Products</h1>
       
    </div>
    
  );
};

export default Recommended;
