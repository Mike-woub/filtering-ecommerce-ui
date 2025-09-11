import React from 'react';
import './colors.css';
import Input from '../../components/input';

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Color</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="color" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
          color="white"
        />
      </div>
    </div>
  );
};

export default Colors;
