import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { changeFilter } from '../../../../redux/actions';
import GENRES from '../selectors/movie-filter-options';
import styles from './style.css';

const style = {
  root: {
    display: 'flex',
    background: 'hsl(0, 0%, 98%)',
    border: '1px solid hsl(0, 0%, 80%)',
    borderRadius: 3,
    height: 40,
  },
  selectMenu: {
    fontSize: 13,
    paddingLeft: 5,
    paddingBottom: 0,
    lineHeight: 1.5,
    height: 36,
  },
  select: {
    fontSize: 13,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
    height: 15,
  },
};

class MoviesFilter extends Component {
  state = { value: '' };

  changeGenre = e => {
    const { changeFilter: chooseGenre } = this.props;
    this.setState({ value: e.target.value });
    chooseGenre(e.target.value);
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    console.log(value);
    return (
      <div className={styles.filter_panel}>
        <h5>Filter by genre</h5>
        <FormControl className={classes.root}>
          <Select
            value={value}
            name={value}
            onChange={this.changeGenre}
            displayEmpty
            className={classes.selectMenu}
          >
            {GENRES.map(genre => (
              <MenuItem
                key={genre.id}
                value={String(genre.id)}
                className={classes.select}
              >
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

MoviesFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(Object).isRequired,
};

const mapDispatchToProps = { changeFilter };

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withStyles(style),
)(MoviesFilter);
