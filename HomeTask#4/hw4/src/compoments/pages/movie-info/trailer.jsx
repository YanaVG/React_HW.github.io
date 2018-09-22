import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Trailer = ({ url }) => (
  <div className={styles.trailer_container}>
    <div className={styles.trailer_iframe}>
      <iframe 
        title="trailer"
        src={`https://www.youtybe.com/embed/${url}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
);

Trailer.propTypes = {
    url: PropTypes.string,
};

Trailer.defaultProps = {
    url: '',
};

export default Trailer;