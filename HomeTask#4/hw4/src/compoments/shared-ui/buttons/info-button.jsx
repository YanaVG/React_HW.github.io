import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    width: 36,
    height: 36,
  },
});

const InfoButton = ({ classes }) => (
  <Tooltip tittle="Get more information" TransitionComponent={Zoom}>
    <Button
      variant="fab"
      color="default"
      className={classes.button}
    >
      <InfoIcon />
    </Button>
  </Tooltip>
);

InfoButton.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
};

export default withStyles(styles)(InfoButton);