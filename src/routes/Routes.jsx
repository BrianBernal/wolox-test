//  libraries
import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

//  constants
import viewsList from 'constants/viewsList';

//  components
import Header from 'components/header/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {viewsList.map(({ path, Component }) => <Route exact path={path} key='path'><Component /></Route>)}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}
