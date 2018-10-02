import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase';
import styles from './style.css';

const Navigation = () =>
  auth.currentUser() ? <PrivateLinks /> : <PublicLinks />;

const PrivateLinks = () => (
  <AppBar position="fixed" color="default" className={styles.app_bar}>
    <ul className={styles.Nav}>
      <li>
        <NavLink
          exact
          to={routes.HOME}
          style={styles.link}
          className={styles.nav_link}
          activeClassName={styles.nav_link__active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.WATCHLIST}
          style={styles.link}
          className={styles.nav_link}
          activeClassName={styles.nav_link__active}
        >
          Watchlist
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.ACCOUNT}
          style={styles.link}
          className={styles.nav_link}
          activeClassName={styles.nav_link__active}
        >
          Account
        </NavLink>
      </li>
      <li>
        <Button
          variant="raised"
          color="secondary"
          type="button"
          onClick={auth.signOut}
        >
          LOG OUT
        </Button>
      </li>
      {auth.isAuth() && (
        <li className={styles.user_panel}>
          <h4>{auth.currentUser().displayName}</h4>
          <img
            src={auth.currentUser().photoURL}
            className={styles.user_foto}
            alt="profile foto"
          />
        </li>
      )}
    </ul>
  </AppBar>
);

const PublicLinks = () => (
  <AppBar position="fixed" color="default" className={styles.app_bar}>
    <ul className={styles.Nav}>
      <li>
        <NavLink
          exact
          to={routes.HOME}
          style={styles.link}
          className={styles.nav_link}
          activeClassName={styles.nav_link__active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.SIGN_IN}
          style={styles.link}
          className={styles.nav_link}
          activeClassName={styles.nav_link__active}
        >
          Sign in
        </NavLink>
      </li>
    </ul>
  </AppBar>
);

export default Navigation;
