import React from 'react';
import {connect} from 'react-redux';

import { toggleHiddenCart } from '../../store/cart/cart.actions';
import {selectCartItemCount} from '../../store/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = ({toggleHiddenCart, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleHiddenCart}>
      <ShoppingIcon className='shopping-icon'/>
      <div className='item-count'>{itemCount}</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart())
})

const mapStateToProps = state => ({
	itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);