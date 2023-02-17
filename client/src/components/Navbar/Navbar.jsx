import React, { useState } from "react";
import {
	FavoriteBorderOutlined,
	KeyboardArrowDown,
	PersonOutlineOutlined,
	Search,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {

	const [open, setOpen] = useState(false)

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="item">
						<img src="/img/en.png" alt="" />
						<KeyboardArrowDown />
					</div>
					<div className="item">
						<span>USD</span>
						<KeyboardArrowDown />
					</div>
					<div className="item">
						<Link className="link" to="/">
							Homepage
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Stores
						</Link>
					</div>
				</div>
				<div className="center">
					<Link className="link" to="/">
						AudioWorld
					</Link>
				</div>
				<div className="right">
					<div className="item">
						<Link className="link" to="/">
							Homepage
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							About
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Contact
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/">
							Stores
						</Link>
					</div>
					<div className="icons">
						<PersonOutlineOutlined />
						<FavoriteBorderOutlined />
						<div className="cartIcon" onClick={() => setOpen(!open)} >
							<ShoppingCartOutlined />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
			{open && <Cart />}
		</div>
	);
};

export default Navbar;