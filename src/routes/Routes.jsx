//  libraries
import React, { Suspense } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

//  constants
import viewsList from 'tools/viewsList';

//  hooks
import { useSelector } from 'react-redux';

//  components
import Header from 'components/header/Header';

// styles
import { PageLoader } from './styles';

export default function Routes() {
  const isLogged = useSelector((state) => state.session.isLogged);

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {viewsList(isLogged).map(({ path, Component }) => (
            <Route exact path={path} key='path'><Component /></Route>
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
