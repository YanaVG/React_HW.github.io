import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthUserContext from './authUserContext';
import { firebase } from '../firebase';
import * as router from '../constants/routes';

const withAuthorization = authCondition => WrappedComponent => {
  class WithAuthorization extends Component {
    static propTypes = {
      history: PropTypes.objectOf(Object).isRequired,
    };

    componentDidMount() {
      const { history } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          history.push(router.SIGN_IN);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <WrappedComponent {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
