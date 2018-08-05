import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';

import styles from './book-editor.css';

export default class BookEditor extends Component {
    static propTypes = {
        title: PropTypes.string,
        imgLink: PropTypes.string,
        author: PropTypes.string,
        descr: PropTypes.string
    };

    static defaultProps = {
        title: 'no title',
        imgLink: 'no imgage link',
        author: 'no author',
        descr: 'no description'
    }

    state = {
        title: '',
        imgLink: '',
        author: '',
        descr: '',
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.setState({
            title: '',
            imgLink: '',
            author: '',
            descr: '',
        });
    };

    render() {
        const { title, imgLink, author, descr } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label>
                    <h2>Title</h2>
                    <input 
                    type="text" 
                    placeholder="Write title..."
                    name="title" 
                    value={title}
                    onChange={this.handleChange}
                    required
                    />
                </label>
                <label>
                <h2>Image link</h2>
                    <input 
                    type="text"
                    placeholder="Write image link..." 
                    name="imgLink" 
                    value={imgLink}
                    onChange={this.handleChange}
                    required
                    />
                </label>
                <label>
                <h2>Author</h2>
                    <input 
                    type="text"
                    placeholder="Write author..." 
                    name="author" 
                    value={author}
                    onChange={this.handleChange}
                    required
                    />
                </label>
                <label>
                <h2>Description</h2>
                    <textarea 
                    type="text"
                    placeholder="Write description..." 
                    name="descr" 
                    value={descr}
                    onChange={this.handleChange}
                    row="20"
                    required
                    />
                </label>
                <Button label="Add book"/>   
            </form>
        )
    }
};