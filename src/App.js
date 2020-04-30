import React from 'react';
import { Switch, Route } from 'react-router-dom' 

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils.js';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
    
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div>
      	<Header currentUser={currentUser}/>
        <Switch> 
          <Route exact path='/' component={Homepage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />  
        </Switch>
      </div>
    ); 
  }
}

export default App;

// Route creates paths and with this we have match,history,location props
// With Switch only matching path route will render
// We can go to paths with Link component or history.push(/)