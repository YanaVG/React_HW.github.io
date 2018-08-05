import React, { Component} from 'react';
import v4 from 'uuid/v4';
import BookEditor from './book-editor'
import BooksList from './books-list';
import Books from '../books.json';
import SearchBar from './search-bar';
import { getVisibleBooks } from './service/selectors';
import styles from './app.css';
// import imgCover from '../img/book-cover.png';
// import styles from './book-editor.css';
export default class App extends Component {
    state = {
        books: Books,
        filter: '',
    };

    deleteBook = id => {
        this.setState(prevState => ({
            books: prevState.books.filter(book => book.id !== id)
        }))
    };

    addBook = ({ img, title, author, descr }) => {
       const book = {
           id: v4(),
           title,
           img,
           author,
           descr,
       };
       
       this.setState(prevState => ({
           books: [book, ...prevState.books]
       })) 
    };

    handleFilter = evt => {
        this.setState({
            filter: evt.target.value
        });
    };

    render() {
        const { books, filter } = this.state;
        const visibleBooks = getVisibleBooks(books, filter);
        return(
            <div className={styles.app_books}>
                <div className={styles.add_filter_panel}>
                    <SearchBar value={filter} onChange={this.handleFilter} />
                    <BookEditor onSubmit={this.addBook} />
                </div>
                <div className={styles.books_panel}>
                    <BooksList books={visibleBooks} onDelete={this.deleteBook} />
                </div>
            </div>
        )
    }
};