import CartActionTypes from './cart.types'

export const toggleHiddenCart = () => ({
	type: CartActionTypes.TOGGLE_HIDDEN_CART
})

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item
})

export const removeItemFromCart = (item) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: item
})

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
})
