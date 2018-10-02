import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from './style.css';

const IMG_BASE = `https://image.tmdb.org/t/p/w500/`;

const ImagesSlider = ({ images }) => (
  <Carousel
    showIndicators={false}
    useKeyboardArrows
    infiniteLoop
    className={styles.carousel_images}
  >
    {images.map((image, idx) => (
      <img key={String(idx)} src={`${IMG_BASE}${image.file_path}`} alt="no" />
    ))}
  </Carousel>
);

ImagesSlider.propTypes = { images: PropTypes.arrayOf(Array).isRequired };

export default ImagesSlider;
