import { DeleteOutlined } from "@mui/icons-material";
import React from "react";

const Cart = () => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys%20rgb&w=1600",
			img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys%20rgb&w=1600",
			title: "Long Sleeve",
      desc: "Long Sleeve",
			isNew: true,
			oldPrice: 34,
			price: 27,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinys%20rgb&w=1600",
			title: "Shirt",
      desc: "Shirt",
			isNew: true,
			oldPrice: 20,
			price: 16,
		},
	];

	return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item=>(
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
