import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Product.scss";

const Product = () => {
	const id = useParams().id;
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(1);

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className="product">
			{loading ? (
				"loading"
			) : (
				<>
					<div className="left">
						<div className="images">
							{/* Clicking on image makes it the primary on the page */}
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img")}
							/>
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes?.img2?.data?.attributes?.url
								}
								alt=""
								onClick={(e) => setSelectedImg("img2")}
							/>
						</div>
						<div className="mainImg">
							<img
								src={
									process.env.REACT_APP_UPLOAD_URL +
									data?.attributes[selectedImg]?.data?.attributes?.url
								}
								alt=""
							/>
						</div>
					</div>

					<div className="right">
						<h1>Title</h1>
						<span className="price">$69</span>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Cupiditate obcaecati ratione sit. Iste, exercitationem. Officia
							culpa eos doloremque molestiae, delectus dolores cumque adipisci
							beatae! Provident suscipit eum minima iste veniam.
						</p>
						<div className="quantity">
							<button
								onClick={() =>
									setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
								}
							>
								-
							</button>
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
							<div className="item">
								{" "}
								compare
								<Balance />
							</div>
						</div>
						<div className="info">
							<span>Vendor: _____</span>
							<span>Product Type: _____</span>
							<span>Tag: _____</span>
						</div>
						<hr />
						<div className="info">
							<span>DESCRIPTION</span>
							<hr />
							<span>ADDITIONAL INFO</span>
							<hr />
							<span>FAQ</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Product;
