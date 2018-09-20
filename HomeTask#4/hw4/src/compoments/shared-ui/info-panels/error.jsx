import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@material-ui/core/Portal';
import SnackBar from '@material-ui/core/Snackbar';
import SnackBarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
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

const SnackBarError = ({ text, classes, open, close }) => (
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
          className={classes.error}
          message={
            <div className={claases.message}>
              <ErrorIcon className={classes.icon}/>
              {text}
            </div>
          }
        />
      </SnackBar>
  </Portal>
);

SnackBarError.propTypes = {
  text: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(Object).isRequired,
}

export default withStyles(styles)(SnackBarError);
