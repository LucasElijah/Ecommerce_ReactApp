import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
					{
						headers: {
							Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
						},
					}
				);
        setData(res.data.data)
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);
  

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
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
