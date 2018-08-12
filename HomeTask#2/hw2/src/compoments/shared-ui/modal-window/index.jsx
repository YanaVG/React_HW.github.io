import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import searchMovieById from '../../secvices/search-by-id';
// import styles from './style.css';

// const URL = 'http://image.tmdb.org/t/p/w300';

export default class ModalWindow extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        toggleModal: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    };

    state = {
        movie: null,
        isLoading: true,
        error: null
    };

    handleSearchMovie = ({ id }) => {
        searchMovieById({
            id,
            onSuccess: this.handleFetchSuccess,
            onError: this.handleFetchFailure,
        })
    };

    handleFetchSuccess = movie => {
        this.setState({
            movie,
            isLoading: false
        })
    };

    handleFetchFailure = error => {
        this.setState({
            isLoading: false,
            error: error.massage
        })
    };

    

    render() {
        const { isOpen, toggleModal }  = this.props;
        const {  error, isLoading } = this.state;
        return(
            <Modal
                open={isOpen}
                onClose={toggleModal}
                className='ReactModal_Content'

            >
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }

            {!isLoading && (
                <div>

                </div>
            )}
            </Modal> 
        )
    }
} 