import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    width: 36,
    height: 36,
  },
});

const SearchButton = ({ classes }) => (
  <Tooltip title="Search movie by title" TransitionComponent={Zoom}>
    <Button
      type="submit"
      variant="fab"
      color="default"
      className={classes.button}
    >
      <SearchIcon />
    </Button>
  </Tooltip>
);

SearchButton.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
};

export default withStyles(styles)(SearchButton);