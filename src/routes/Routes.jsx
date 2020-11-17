//  libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  components
import Header from 'components/header/Header';
import Home from 'views/home/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route key='home'><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}
