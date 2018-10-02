import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Portal from '@material-ui/core/Portal';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './style.css';

const styleBar = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

class ButtonForm extends Component {
  state = { isOpen: false };

  toggleSnackBar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { disabled, label, text, classes } = this.props;
    return (
      <div className={styles.button}>
        <Button
          variant="raised"
          color="default"
          type="submit"
          disabled={disabled}
          className={styles.form_button}
          onClick={this.toggleSnackbar}
        >
          {label}
        </Button>
        <Portal>
          <Snackbar
            className={classes.snackbar}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={isOpen}
            onClose={this.toggleSnackbar}
            autoHideDuration={3000}
            resumeHideDuration={3000}
            message={<div>{text}</div>}
          />
        </Portal>
      </div>
    );
  }
}

ButtonForm.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(Object).isRequired,
};

export default withStyles(styleBar)(ButtonForm);
