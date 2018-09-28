import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import ButtonForm from '../../shared-ui/button-form';
import { auth } from '@firebase-modules';
import styles from './style.css';

class ChangePasswordForm extends Component {
  state = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  onSubmit = event => {
    event.preventDefault();
    const { passwordOne } = this.state;
    const { state } = this;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...state });
      })
      .catch(error => {
        this.setState({ error });
      });
    
    this.setState({
        passwordOne: '',
        passwordTwo: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState = {
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }  
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isDisabled = auth.isAuth();
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
   
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          placeholder="New Password"
          className={styles.input}
          value={passwordOne}
          name="passwordOne"
          type="password"
          onChange={this.handleChange}
          disabled={isDisabled}
        />
        <Input
          placeholder="Confirm New Password"
          className={styles.input}
          value={passwordTwo}
          name="passwordTwo"
          type="password"
          onChange={this.handleChange}
          disabled={isDisabled}
        />
        <ButtonForm
          disabled={isInvalid}
          label="Update Password"
          text="Your password has been changed successfully"
        />
        {isDisabled && (
          <p className={styles.warning_text}>
            *This option is active only for signin with email users
          </p>
        )}
         {error && <p className={styles.error_text}>{error.message}</p>}
      </form>
    );
  }
}

export default ChangePasswordForm;