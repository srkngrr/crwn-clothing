import CartActionTypes from './cart.types';
import {addItem} from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItem(state.cartItems, action.payload)
			}
		case CartActionTypes.TOGGLE_HIDDEN_CART:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state
	}
}

export default cartReducer;
