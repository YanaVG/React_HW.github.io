import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@material-ui/core/Portal';
import SnackBar from '@material-ui/core/Snackbar';
import SnackBarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
  error: {
    backgroundColor: green[500],
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: 20,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

const SnackBarSuccess = ({ text, classes, open, close }) => (
  <Portal>
      <SnackBar
        className={classes.snackbar}
        anchorOrigin={{
           vertical: 'top',
           horizontal: 'center'
        }}
        open={open}
        onClose={close}
        autoHideDuration={1500}
      >
        <SnackBarContent
          className={classes.warning}
          message={
            <div className={claases.message}>
              <CheckCircleIcon className={classes.icon}/>
              {text}
            </div>
          }
        />
      </SnackBar>
  </Portal>
);

SnackBarSuccess.propTypes = {
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(Object).isRequired,
}

export default withStyles(styles)(SnackBarSuccess);
