import React from "react";
import {
	FavoriteBorderOutlined,
	KeyboardArrowDown,
	PersonOutlineOutlined,
	Search,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
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
						<Link className="link" to="/products/1">
							Women
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/2">
							Men
						</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/3">
							Kids
						</Link>
					</div>
				</div>
				<div className="center">
					<Link className="link" to="/">
						TITLE TEXT LINK HERE
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
						<div className="cartIcon">
							<ShoppingCartOutlined />
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
