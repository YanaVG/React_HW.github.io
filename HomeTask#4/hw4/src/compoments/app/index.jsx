import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ScrollUpButton from 'react-scroll-up-button';
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
          component={route.component}
        />
      ))}
    </Switch>
    <ScrollUpButton />
  </div>
);

export default withAuthentication(hot(module)(App));
