import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as routes from '../../constants/routes';
import styles from './style.css';

const Navigation = () => (<div></div>);

const PrivateLinks = () => (
<ul className={styles.Nav}>
  <li>
    <NavLink
      exact
      to={routes.HOME}
      style={styles.link}
      className="Nav-link"
      activeClassName="Nav-link-active"
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to={routes.WATCHLIST}
      style={styles.link}
      className="Nav-link"
      activeClassName="Nav-link-active"
    >
    Watchlist
    </NavLink>
  </li>
  <li>
    <NavLink
      to={routes.ACCOUNT}
      style={styles.link}
      className="Nav-link"
      activeClassName="Nav-link-active"
    >
    Account
    </NavLink>
  </li>
  <li>
    <Button
      variant="raised"
      color="secondary"
      type="button"
      onClick={}
    >
      LOG OUT
    </Button>
  </li>
  {/* {auth.isAuth() && (
      <li className={styles.user_panel}>
        <h4>{auth.currentUser().displayName}</h4>
        <img
          src={auth.currentUser().photoURL}
          className={styles.user_foto}
          alt="profile foto"
        />
      </li>
    )} */}
  </ul>
);

const PublicLinks = () => (
  <ul className={styles.Nav}>
    <li>
        <NavLink
          exact
          to={routes.HOME}
          style={styles.link}
          className="Nav-link"
          activeClassName="Nav-link-active"
        >
          Home
        </NavLink>
    </li>
    <li>
        <NavLink
          to={routes.SIGN_IN}
          style={styles.link}
          className="Nav-link"
          activeClassName="Nav-link-active"
        >
          Sign in
        </NavLink>
    </li>
  </ul>
);

export default Navigation;