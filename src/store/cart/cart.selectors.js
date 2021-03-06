import { createSelector } from 'reselect' // Memoization

const selectCart = state => state.cart  // input selectors

export const selectCartItems = createSelector( // first array , second func
	[selectCart], 
	cart => cart.cartItems
)  

export const selectCartHidden = createSelector(
	[selectCart], 
	cart => cart.hidden
)  

export const selectCartItemCount = createSelector(
	[selectCartItems], 
	cartItems => cartItems.reduce((accQuantity,cartItem) => accQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
	[selectCartItems], 
	cartItems => cartItems.reduce((accQuantity,cartItem) => accQuantity + cartItem.quantity * cartItem.price, 0)
)