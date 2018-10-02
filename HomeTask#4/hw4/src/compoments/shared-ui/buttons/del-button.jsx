import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    //   margin: theme.spacing.unit,
    margin: 5,
    width: 36,
    height: 36,
  },
});

const DelButton = ({ classes, onClick }) => (
  <Tooltip title="Delete movie" TransitionComponent={Zoom}>
    <Button
      variant="fab"
      color="secondary"
      className={classes.button}
      onClick={onClick}
    >
      <DeleteIcon />
    </Button>
  </Tooltip>
);

DelButton.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(DelButton);
