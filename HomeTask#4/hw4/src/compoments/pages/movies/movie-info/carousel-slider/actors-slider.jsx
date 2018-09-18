import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from './style.css';

const IMG_BASE = `https://image.tmdb.org/t/p/w300/`;

const ActorsSlider = ({ actors }) => (
  <Carousel
    showStatus={false}
    showIndicators={false}
    infiniteLoop
    className={styles.carousel_actors}
  >
    {actors.map(actor => (
      <div key={actor.cast_id}>
        <img src={`${IMG_BASE}${actor.profile_path}`} alt="no actor photo" />
        <p className={style.actor_name}>{actor.name}</p>
      </div>
    ))}
  </Carousel>
);

ActorsSlider.propTypes = {
    actors: PropTypes.arrayOf(Array).isRequired,
};

export default ActorsSlider;