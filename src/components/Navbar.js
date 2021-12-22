import React, { useContext } from "react";
import { CartContext } from "../context/ContextState";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
	const { totalItems } = useContext(CartContext);
	return (
		<>
			<header>
				<div className="continue-shopping">
					<h3>continue shoping</h3>
				</div>

				<div className="cart-icon">
					<AddShoppingCartIcon />
					<p>{totalItems}</p>
				</div>
			</header>
		</>
	);
};

export default Navbar;
