import React from 'react';
import { Switch, Route } from 'react-router-dom' 

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={Homepage} /> 
        <Route path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;

// Route creates paths and with this we have match,history,location props
// With Switch only matching path route will render
// We can go to paths with Link component or history.push(/)