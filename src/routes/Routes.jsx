//  libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  components
import Header from 'components/header/Header';
import Home from 'views/home/Home';
import Register from 'views/register/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/register'><Register /></Route>
      </Switch>
    </BrowserRouter>
  );
}
