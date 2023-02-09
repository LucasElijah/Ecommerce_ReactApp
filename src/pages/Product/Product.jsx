import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import "./Product.scss";

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		"https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
	];

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					{/* Clicking on image makes it the primary on the page */}
					<img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
					<img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>

			<div className="right">
				<h1>Title</h1>
				<span className="price">$69</span>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
					obcaecati ratione sit. Iste, exercitationem. Officia culpa eos
					doloremque molestiae, delectus dolores cumque adipisci beatae!
					Provident suscipit eum minima iste veniam.
				</p>
				<div className="quantity">
					<button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1 )}>-</button>
					{quantity}
					<button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className="add">
					<AddShoppingCart /> add to cart
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorder /> wishlist
					</div>
					<div className="item"> compare
						<Balance />
					</div>
				</div>
				<div className="info">
					<span>Vendor: _____</span>
					<span>Product Type: _____</span>
					<span>Tag: _____</span>
				</div>
				<div className="details">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFO</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
