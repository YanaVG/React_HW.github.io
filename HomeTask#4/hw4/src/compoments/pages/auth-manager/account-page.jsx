import React from 'react';
import Card from '@material-ui/core/Card';
import withAuthorization from '../../../hoc/withAuthentication';
import AuthUserContext from '../../../hoc/authUserContext';
import ChangePasswordForm from './passwort-change';
import styles from './style.css';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className={styles.accountPage}>
        <h1 className={styles.account_header}>
          Your account:
          <span className={styles.user_email}>
            {authUser.email || authUser.displayName}
          </span>
        </h1>
        <Card className={styles.accountForm}>
          <h1>Change password</h1>
          <ChangePasswordForm />
        </Card>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(AccountPage);
