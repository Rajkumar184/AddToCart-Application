import React, { createContext, useReducer, useEffect } from "react";
import { products } from "../components/product";
import ContextCart from "../components/ContextCart";
import Reducer from "./Reducer";
import {
	REMOVE_ITEM,
	CLEAR_CART,
	INCREMENT,
	DECREMENT,
	GET_TOTAL,
} from "./Types";

export const CartContext = createContext();

const initialState = {
	item: products,
	totalAmount: 0,
	totalItem: 0,
};

const CartSate = () => {
	// const [item, setItem] = useState(products);
	const [state, dispatch] = useReducer(Reducer, initialState);

	// to delete the indv. elements from an Item Cart
	const removeItem = (id) => {
		return dispatch({
			type: REMOVE_ITEM,
			payload: id,
		});
	};

	// clear the cart
	const clearCart = () => {
		return dispatch({ type: CLEAR_CART });
	};

	// increment the item
	const increment = (id) => {
		return dispatch({
			type: INCREMENT,
			payload: id,
		});
	};

	// decrement the item
	const decrement = (id) => {
		return dispatch({
			type: DECREMENT,
			payload: id,
		});
	};

	// we will use the useEffect to update the data
	useEffect(() => {
		dispatch({ type: GET_TOTAL });
		// console.log("Awesome");
	}, [state.item]);

	return (
		<CartContext.Provider
			value={{ ...state, removeItem, clearCart, increment, decrement }}
		>
			<ContextCart />
		</CartContext.Provider>
	);
};

export default CartSate;
