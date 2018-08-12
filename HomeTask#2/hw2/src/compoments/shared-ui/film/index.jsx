import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from '../button-panel';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const Film = ({
    id,
    title,
    release_date: releaseDate, 
    overview, 
    poster_path: posterPath,
    vote_average: voteAvaradge,
    addMovie,
    btnAddTitle,
    btnInfoTitle
     }) => (
        <div className={styles.film_item}>
            <img src={`${URL}${posterPath}`} alt={title}/>
            <p className={styles.releaseDate}>{releaseDate}</p>
            <p className={styles.voteAvaradge}>{voteAvaradge}</p>
            <p className={styles.overview}>{overview}</p>
            <ButtonPanel
                id={id}
                btnFirstFunc={addMovie}
                btnFirstTitle={btnAddTitle} 
                btnSecontTitle={btnInfoTitle}
            />
        </div>
);

Film.propTypes = {
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    addMovie: PropTypes.func.isRequired,
    btnAddTitle: PropTypes.string.isRequired,
    btnInfoTitle: PropTypes.string.isRequired,
};

Film.defaultProps = {
    poster_path: null
};

export default Film;