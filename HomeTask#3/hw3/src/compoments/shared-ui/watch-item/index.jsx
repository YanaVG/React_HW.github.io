import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ICONS from '../icons';
import Icon from './icon';
import { removeFromWatchlist } from '../../../redux/actions';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const WatchItem = ({
  id,
  title,
  release_date: releaseDate,
  poster_path: posterPath,
  vote_average: voteAvaradge,
  onDelete,
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
            onClick={() => onDelete(id)}
          >
            <Icon icon={ICONS.delete} />
          </button>
          <button
            type="button"
            className={styles.btn_info}
            // onClick={() => toggleModal(id)}
          >
            <Icon icon={ICONS.info} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

WatchItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  // toggleModal: PropTypes.func.isRequired,
};

WatchItem.defaultProps = {
  id: '',
  title: 'no title',
  release_date: 'no release date',
  poster_path: 'no poster path',
  vote_average: 'no average vote',
};

const mapDispatchToProp = {
  onDelete: removeFromWatchlist,
};

export default connect(
  null,
  mapDispatchToProp,
)(WatchItem);
