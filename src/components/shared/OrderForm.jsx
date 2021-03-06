import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { Button } from 'react-bootstrap'

const OrderForm = ({ order, handleSubmit, handleChange, cancelPath, handleSizeSelect, handleSelect, path }) => {



  return (
    <form onSubmit={handleSubmit} className="form">

        <div className="input">
        <label>Name</label><br/>
        <input
        placeholder='Your name'
        value={order.name}
        name="name"
        onChange={handleChange}
        />
        </div>


        <div className="input">
        <label>Flavor</label><br/>
        <select
        value={order.flavor}
        name="flavor"
        onChange={handleSelect}
        >
        <option></option>
        <option>Chocolate</option>
        <option>Vanilla</option>
        <option>Strawberry</option>
        <option>Cookies and Cream</option>
        <option>Mint Chocolate Chip</option>
        <option>Pistachio</option>
        <option>Birthday Cake</option>
        <option>Buttered Pecan</option>
        </select>
        </div>


        <div className="input">
        <label>Topping 1</label><br/>
        <select value={order.toppings} name="topping1" onChange={handleSelect}>
        <option></option>
        <option>Sprinkles</option>
        <option>Oreos</option>
        <option>Gummy Bears</option>
        <option>Hot Fudge</option>
        <option>Chocolate Sauce</option>
        <option>Pecans</option>
        </select>
        </div>

 
        <div className="input">
        <label>Topping 2</label><br/>
        <select value={order.toppings} name="topping2" onChange={handleSelect}>
        <option></option>
        <option>Sprinkles</option>
        <option>Oreos</option>
        <option>Gummy Bears</option>
        <option>Hot Fudge</option>
        <option>Chocolate Sauce</option>
        <option>Pecans</option>
        </select>
        </div>



        <div className="input">
        <label>Topping 3</label><br/>
        <select value={order.toppings} name="topping3" onChange={handleSelect}>
        <option></option>
        <option>Sprinkles</option>
        <option>Oreos</option>
        <option>Gummy Bears</option>
        <option>Hot Fudge</option>
        <option>Chocolate Sauce</option>
        <option>Pecans</option>
        </select>
        </div>



        <div className="input">
        <label>Size</label><br/>
        <select value={order.size} name="size" onChange={handleSizeSelect}>
          <option></option>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
        </select>
        </div>

        {path==="/order-icecream" ? 
        <div className="input">
        <label>Holder</label><br/>
        <select value={order.holder} name="holder" onChange={handleSelect}>
        <option></option>
          <option>cone</option>
          <option>cup</option>
          <option>bowl</option>
          <option>waffle cone</option>
        </select>
        </div>
        : null }


        <Button variant="primary"type="submit">Submit</Button>
        <Link to={cancelPath}>
        <Button variant="primary">Cancel</Button>
        </Link>
    </form>
    )
}

export default OrderForm