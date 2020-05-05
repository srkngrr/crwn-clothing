import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import { setCurrentUser } from './store/user/user.actions';
import { selectCurrentUser } from './store/user/user.selectors';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // onAuthStateChanged -> gives us userAuth Object
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {  // onSnapshot -> gives us shapshot object
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })   
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
      	<Header/>
        <Switch> 
          <Route exact path='/' component={Homepage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUp/>} />  
        </Switch>
      </div>
    ); 
  }
}

const mapStateToProps = createStructuredSelector({  // state.user
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App); // null because we dont need props to our component

// Route creates paths and with this we have match,history,location props
// With Switch only matching path route will render
// We can go to paths with Link component or history.push(/)