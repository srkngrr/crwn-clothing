import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux'

import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden, toggleHiddenCart}) => {
  return (
    <div className='header'>
    	<Link className='logo-container' to='/' >
    		<Logo className='logo'/>
    	</Link>
    	<div className='options'>
    		<Link className='option' to="/shop">SHOP</Link>
    		<Link className='option' to="/">CONTACT</Link>
    		{ currentUser 
          ? <Link className='option' to='/' onClick={() => auth.signOut()} >SIGN OUT</Link>  
          : <Link className='option' to="/signin">SIGN IN</Link>
        }
        <CartIcon />
    	</div>
      { hidden
        ? null
        : <CartDropdown />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({  // state = {user: {currentUser: action.payload } ,shop:  } => this is store object
  currentUser: state.user.currentUser, // giving props to component from big store object
  hidden: state.cart.hidden
})



export default connect(mapStateToProps)(Header);

