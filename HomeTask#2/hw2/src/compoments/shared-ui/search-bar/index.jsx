import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import ICONS from '../icons/index';
import styles from './style.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
    // console.log(this.state.title);
  };

  handleSubmit = e => {
    const { onSearch } = this.props;
    const { title } = this.state;
    e.preventDefault();

    onSearch({ title });

    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form className={styles.wrap} onSubmit={this.handleSubmit}>
        <p className={styles.title}>Search by title</p>
        <div>
          <input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className={styles.btn_search}>
            <Icon icon={ICONS.search} />
          </button>
        </div>
      </form>
    );
  }
}
