import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectCartHidden } from '../../store/cart/cart.selectors'

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

const mapStateToProps = createStructuredSelector({  // state = {user: {currentUser: action.payload } ,shop:  } => this is store object
  currentUser: selectCurrentUser, // giving props to component from big store object
  hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);

