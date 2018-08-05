import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from './book.css';

const Book = ({ img, title, author, descr, onDelete}) => (
    <div className={styles.wrap}>
        <div>
            <img src={img} alt={title} />
        </div>
        <div className={styles.content}>
            <h2>{title}</h2>
            <p className={styles.author}>Author: {author}</p>
            <p>{descr}</p>
            <Button onDelete={onDelete} label="Delete"/>
        </div>
        
    </div>
);

Book.propTypes = {
    title: PropTypes.string,
    imgLink: PropTypes.string,
    author: PropTypes.string,
    descr: PropTypes.string,
};

Book.defaultProps = {
    title: 'no title',
    imgLink: 'no imgage link',
    author: 'no author',
    descr: 'no description'
};

export default Book;