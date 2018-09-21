import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    marginRight: 5,
    width: 36,
    height: 36,
  },
});

const AddButton = ({ classes, onClick }) => (
  <Tooltip title="Add movie to watchlist" TransitionComponent={Zoom}>
    <Button
      variant="fab"
      color="secondary"
      className={classes.button}
      onClick={onClick}
    >
      <AddIcon />
    </Button>
  </Tooltip>
);

AddButton.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddButton);
