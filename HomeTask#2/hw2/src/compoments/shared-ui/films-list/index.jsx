import React from 'react';
import PropTypes from 'prop-types';
import Film from '../film'
import styles from './style.css';

const FilmsList = ({ movies, addMovie, btnAddTitle, btnInfoTitle }) => (
    <ul className={styles.film_list}>
        {movies.map(movie => (
            <li key={movie.id} className={styles.film_item}>
                <Film 
                    {...movie} 
                    addMovie={addMovie} 
                    btnAddTitle={btnAddTitle} 
                    btnInfoTitle={btnInfoTitle}
                />
            </li>
        ))}
    </ul>
);

FilmsList.propTypes = {
    movies: PropTypes.arrayOf(Array).isRequired,
    addMovie: PropTypes.func.isRequired,
    btnAddTitle: PropTypes.string.isRequired,
    btnInfoTitle: PropTypes.string.isRequired,
};

export default FilmsList;