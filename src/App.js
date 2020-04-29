import React from 'react';
import { Switch, Route, Link } from 'react-router-dom' 

import './App.css';

import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={Homepage} /> 
      </Switch>
    </div>
  );
}

export default App;

// Route creates paths and with this we have match,history,location props
// With Switch only matching path route will render
// We can go to paths with Link component or history.push(/)