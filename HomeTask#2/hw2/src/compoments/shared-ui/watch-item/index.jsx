import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from '../button-panel';
import styles from './style.css';

const URL = 'http://image.tmdb.org/t/p/w300';

const WatchItem = ({
    id,
    title,
    release_date: releaseDate,
    poster_path: posterPath,
    vote_average: voteAvaradge,
    onDelete,
    btnDeleteTitle,
    btnInfoTitle,

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
                    <ButtonPanel
                        id={id}
                        btnFirstFunc={onDelete}
                        btnFirstTitle={btnDeleteTitle}
                        btnSecontTitle={btnInfoTitle}
                    />
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
    btnDeleteTitle: PropTypes.string.isRequired,
    btnInfoTitle: PropTypes.string.isRequired,
};

WatchItem.defaultProps = {
    id: '',
    title: 'no title',
    release_date: 'no release date',
    poster_path: 'no poster path',
    vote_average: 'no average vote' 
};

export default WatchItem;
 