import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][type][$eq]=${type}`
	);

	return (
		<div className="FeaturedProducts">
			<div className="top">
				<h1>{type} product</h1>
				<p>
					lorem ipsum dolor sit amet, consecttuyur adsopiscing elit, sed do
					eiusmod tempor incidid ut labre ret dlored mange aliqua. Quis ipsum
					sespendisse il labore Risus. Coomod viverra maecsena accumsan lacus
					fel facilisis labre et dolore magna aliqua quis. Ipsum ultrices
					gravida. Risus commodo viverra maecenas.
				</p>
			</div>
			<div className="bottom">
				{error
					? "something went wrong here buddy..."
					: loading
					? "loading"
					: data.map((item) => <Card item={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
