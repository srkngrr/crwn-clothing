import React from 'react';
import {connect} from 'react-redux'

import './checkout-item.styles.scss';
import {removeItemFromCart, removeItem, addItemToCart} from '../../store/cart/cart.actions';


const CheckoutItem = ({item , clearItem, removeItem, addItem}) => {
	const {name, price, imageUrl, quantity} = item
	return(
		<div className='checkout-item'>
			<div className='image-container'>
				<img alt='item' src={imageUrl}/>
			</div>
			<div className='name'>{name}</div>
			<div className='quantity'>
				<div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
					<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
			</div>
			<div className='price'>${price}</div>
			<div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem : item => dispatch(removeItemFromCart(item)),
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItemToCart(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);