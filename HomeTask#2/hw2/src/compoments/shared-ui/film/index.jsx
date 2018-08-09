import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import styles from './style.css';

const Film = ({date, overview, img, onAdd}) => (
    <div className={styles.grid_item}>
        <div>
            <img src={`http://image.tmdb.org/t/p/w300${img}`} alt="film"/>
        </div>
        <div className={styles.wrap_info}>
            <p className={styles.title}>{date}</p>
            <p>{overview}</p>
        </div>
        <div className={styles.wrap_button}>
            <Button onAdd={onAdd} label="✺"/>
            <Button onAdd={onAdd} label="Info"/>
        </div>
       

    </div>
);

Film.propTypes = {
    date: PropTypes.string,
    img: PropTypes.string,
    overview: PropTypes.string,
};

Film.defaultProps = {
    title: 'no title',
    img: 'no imgage link',
    overview: 'no description'
};

export default Film;