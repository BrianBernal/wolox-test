//  libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//  components
import Home from 'views/home/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route key='home'><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}
