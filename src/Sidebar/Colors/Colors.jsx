import React from 'react'
import './colors.css'
import Input from '../../components/input'
const Colors = ({handleChange}) => {
  return (
    <div>
        <h2 className="sidebar-title color-title">Colors</h2> 
          <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="" name="test1"/>
            <span className="checkmark all"></span>All
        </label>

        <Input
        handleChange={handleChange}
        title="Balck"
        value="balck"
        name="test1"
        color="black"
        />
        <Input
        handleChange={handleChange}
        title="Blue"
        value="blue"
        name="test1"
        color="blue"
        />
        <Input
        handleChange={handleChange}
        title="Red"
        value="red"
        name="test1"
        color="red"
        />
        <Input
        handleChange={handleChange}
        title="Green"
        value="green"
        name="test1"
        color="green"
        />
         <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="white" name="test1"/>
            <span className="chekmark"></span>
            <span className="checkmark" style={{background:"white", border:"2px solid black", color:"black"}}></span>White
        </label>
        
    </div>
  )
}

export default Colors