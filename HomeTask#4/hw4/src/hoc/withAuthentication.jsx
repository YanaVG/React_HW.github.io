import React, { Component } from 'react';
import AuthUserContext from './authUserContext';
import firebase from '../firebase';

const withAuthentication = WrappedComponent => 
  class WithAuthentication extends Component {
    state = {
      authUser: null, 
    };

    componentDidMount() {
      firebase.auth.onAuthStateChange(
        authUser =>
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null }),
      );
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <WrappedComponent {...this.props}/>
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthentication;
