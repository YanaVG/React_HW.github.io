import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-redux';
import { hot } from 'react-hot-loader';
import Navigation from '../navigation';
import ROUTES from '../../constants/routes';
import withAuthentication from '../../hoc/withAuthentication';
import styles from './style.css';

const App = () => (
  <div className={styles.app}>
    <Navigation />
    <Switch>
      {Object.values(ROUTES).map((route, index) => (
        <Route
          key={String(index)}
          path={route.path}
          exact={route.exact}
          component={route.componenet}
        />
      ))}
    </Switch>
  </div>
);

export default withAuthentication(hot(module)(App));