import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sucess from './Sucess';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/Sucess" component={Sucess}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


