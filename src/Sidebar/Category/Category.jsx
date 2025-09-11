import React from 'react';
import './category.css';
import Input from '../../components/input';

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Brand</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="brand" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="Nike"
          title="Nike"
          name="brand"
        />
        <Input
          handleChange={handleChange}
          value="Adidas"
          title="Adidas"
          name="brand"
        />
        <Input
          handleChange={handleChange}
          value="Puma"
          title="Puma"
          name="brand"
        />
        <Input
          handleChange={handleChange}
          value="Vans"
          title="Vans"
          name="brand"
        />
      </div>
    </div>
  );
};

export default Category;
