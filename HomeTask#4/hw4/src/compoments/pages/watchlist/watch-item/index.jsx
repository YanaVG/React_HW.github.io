import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as routes from '../../../../constants/routes';
import { removeFromWatchlist } from '../../../../redux/actions';
import ICONS from '../../../shared-ui/icons';
import Icon from './icon';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const WatchItem = ({
  id,
  title,
  release_date: releaseDate,
  poster_path: posterPath,
  vote_average: voteAvaradge,
  removeCard,
  location,
  // show,
}) => (
  <div className={styles.watch_item}>
    <div className={styles.wrap_img}>
      <img src={`${URL}${posterPath}`} alt={title} />
    </div>
    <div className={styles.wrap_content}>
      <p className={styles.title}>{title}</p>
      <p className={styles.releaseDate}>Realeade Date: {releaseDate}</p>
      <p className={styles.voteAvaradge}>Vote Avaradge: {voteAvaradge}</p>
      <div className={styles.button_panel}>
        <div className={styles.wrap_button}>
          <button
            type="button"
            className={styles.btn_del}
            onClick={() => removeCard(id)}
          >
            <Icon icon={ICONS.delete} />
          </button>
          <NavLink
            to={{
              pathname: `${routes.MOVIES}/${id}`,
              search: `${location.search}`,
              state: { from: location },
            }}
          >
            <button
              type="button"
              className={styles.btn_info}
              // onClick={() => toggleModal(id)}
            >
              <Icon icon={ICONS.info} />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

WatchItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  removeCard: PropTypes.func.isRequired,
  location: PropTypes.objectOf(Object).isRequired,
  // show: PropTypes.func.isRequired,
};

const mapDispatchToProp = {
  removeCard: removeFromWatchlist,
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProp,
  ),
)(WatchItem);
