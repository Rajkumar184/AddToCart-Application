import {
	REMOVE_ITEM,
	CLEAR_CART,
	INCREMENT,
	DECREMENT,
	GET_TOTAL,
} from "./Types";

const Reducer = (state, action) => {
	switch (action.type) {
		// case ADD_TO_CART: {
		// 	return {
		// 		...state,
		// 		cartItems: [...state.cartItems, action.payload],
		// 	};
		// }
		case REMOVE_ITEM: {
			return {
				...state,
				item: state.item.filter((curElem) => {
					return curElem.id !== action.payload;
				}),
			};
		}

		case CLEAR_CART: {
			return { item: [] };
		}

		case INCREMENT: {
			const updatedCart = state.item.map((curElem) => {
				if (curElem.id === action.payload) {
					return { ...curElem, quantity: curElem.quantity + 1 };
				}
				return curElem;
			});

			return { ...state, item: updatedCart };
		}

		case DECREMENT: {
			const updatedCart = state.item.map((curElem) => {
				if (curElem.id === action.payload) {
					return { ...curElem, quantity: curElem.quantity - 1 };
				}
				return curElem;
			});

			return { ...state, item: updatedCart };
		}

		case GET_TOTAL: {
			let { totalItem, totalAmount } = state.item.reduce(
				(accum, curVal) => {
					let { price, quantity } = curVal;

					let updatedTotalAmount = price * quantity;
					accum.totalAmount += updatedTotalAmount;

					accum.totalItem += quantity;
					return accum;
				},
				{
					totalItem: 0,
					totalAmount: 0,
				}
			);
			return { ...state, totalItem, totalAmount };
		}

		default:
			return state;
	}
};

export default Reducer;
