import React from "react";
import "./List.scss";
import Card from "../Card/Card"

const List = () => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys%20rgb&w=1600",
			img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys%20rgb&w=1600",
			title: "Long Sleeve",
			isNew: true,
			oldPrice: 34,
			price: 27,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinys%20rgb&w=1600",
			title: "Shirt",
			isNew: true,
			oldPrice: 20,
			price: 16,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinysrgb&w=1600",
			title: "Apparel",
			oldPrice: 19,
			price: 13,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinys rgb&w=1600",
			title: "Misc",
			oldPrice: 19,
			price: 10,
		},
	];
  
	return(
    <div className="list">
      {data?.map(item=>(
      <Card item={item} key={item.id} />
    ))}

    </div>
  )
    
};

export default List;
