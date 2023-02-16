import { DeleteOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss"

const Cart = () => {
	
  const products = useSelector(state => state.cart.products)

	return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlined />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$69</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className="reset">Empty Cart</span>
    </div> 
  );
};

export default Cart;
