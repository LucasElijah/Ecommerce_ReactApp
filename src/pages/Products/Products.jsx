import React from 'react'
import './Products.scss'


const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Pants</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>$0</span>
            <input type="range" min={0} max={1000} />
            <span>$1000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name="price" />
            <label htmlFor="asc">Price (Lowest First) </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name="price" />
            <label htmlFor="desc">Price (Highest First) </label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className='catImg'
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="" 
        />
      </div>
    </div>
  )
}

export default Products