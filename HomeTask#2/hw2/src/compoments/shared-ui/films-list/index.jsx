import React from 'react';
import PropTypes from 'prop-types';
import Film from '../film'
import styles from './style.css';

const FilmsList = ({ movies }) => (
    <ul className={styles.grid}>
        {movies.map(movie => (
            <li key={movie.id}>
                <Film 
                date={movie.release_date}
                overview={movie.overview}
                img={movie.poster_path}
                />
            </li>
        ))}
    </ul>
);

FilmsList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default FilmsList;