import { DeleteOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";

const Cart = () => {
	const products = useSelector((state) => state.cart.products);

	/* const totalPrice = () => {
		let total = 0;
		products.forEach((item) => {
			total += item.quantity * item.price;
		});
		return total.toFixed(2);
	}; */

	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{products?.map((item) => (
				<div className="item" key={item.id}>
					<img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc?.substring(0, 100)}</p>
						<div className="price">1 x ${item.price}</div>
					</div>
					<DeleteOutlined className="delete" />
				</div>
			))}
			<div className="total">
        <span>SUBTOTAL</span>
        <span>${/* {totalPrice()} */}45454</span>
      </div>
			<button>Proceed to Checkout</button>
			<span className="reset">Empty Cart</span>
		</div>
	);
};

export default Cart;
