//  libraries
import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

//  constants
import viewsList from 'tools/viewsList';

//  hooks
import { useSelector } from 'react-redux';

//  components
import Header from 'components/header/Header';

export default function Routes() {
  const isLogged = useSelector((state) => state.session.isLogged);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {viewsList(isLogged).map(({ path, Component }) => <Route exact path={path} key='path'><Component /></Route>)}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}
