import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BooksList = ({ books, onDelete }) => (
    <ul>
        {books.map(book => (
            <li key={book.id}>
                <Book 
                title={book.title} 
                author={book.author} 
                img={book.img} 
                descr={book.descr} 
                onDelete={() => onDelete(book.id)}
                />
            </li>
        ))}
    
    </ul>
);

BooksList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default BooksList;