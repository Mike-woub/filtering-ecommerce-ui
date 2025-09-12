import React, { useRef, useState } from 'react';
import CategoryFilter from './Category/CategoryFilter';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({
  handleBrandChange,
  handleCategoryChange,
  handleColorChange,
  handlePriceChange,
  resetFilters
}) => {
  const formRef = useRef();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleReset = () => {
    resetFilters();
    formRef.current.reset();
  };

  const handleDropdown = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <section className="text-white w-full md:w-max ml-4 p-4">
   


      <form>
      <div className="sm:hidden fixed top-52 left-1 z-50">
        {!showSidebar ? (
          <AiOutlineMenu
            className=" text-2xl cursor-pointer text-amber-300 mb-4"
            onClick={handleDropdown}
          />
        ) : (
          <AiOutlineClose
            className="text-2xl cursor-pointer  text-amber-300 mb-4 ml"
            onClick={handleDropdown}
          />
        )}
      </div>
      <div ref={formRef}
        className={`transition-all duration-300 ease-in-out overflow-y-auto mb-2 ${
          showSidebar ? 'block' : 'hidden'
        } sm:block fixed md:top-[120px] md:h-[calc(100vh-120px)] top-52 scrollable-section`} >
        <CategoryFilter handleChange={handleCategoryChange} />
        <hr />

        <Category handleChange={handleBrandChange} />
        <hr />

        <Price handleChange={handlePriceChange} />
        <hr />

        <Colors handleChange={handleColorChange} />
        <hr />

        <button
          className="reset-btn mb-4 cursor-pointer md:block"
          type="button"
          onClick={handleReset}
        >
          🔄 Reset Filters
        </button>
        </div>
      </form>
    </section>
  );
};

export default Sidebar;
