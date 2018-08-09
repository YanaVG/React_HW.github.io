import React, { Component } from 'react';
// import WatchList from '../compoments/shared-ui/watch-list';
import FilmsList from './shared-ui/films-list';
import SearchBar from './shared-ui/search-bar';
import CategorySelertor from './category-selector';
import selectorOption from './selector-options';
import { fetchByCategory, fetchByTitle } from './secvices/api';
import styles from './app.css';

export default class App extends Component {
    state = {
        movies: [],
        category: null,
        watchList: [],
        title: '',
        loading: false,
        error: null
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(!this.state.category) return true;
    //     const prevCategory = this.state.category.value;
    //     const nextCategory = nextState.category.value;
    //     const shouldUpdate = prevCategory !== nextCategory;
    //     return shouldUpdate;
    // };
    componentDidMount() {
        this.setState({ loading: true});
        fetchByTitle({
            titleValue: this.state.titleValue,
            onSuccess: this.handleFetchSuccess, 
            onError: this.handleFetchFailure,
        });
    //     // fetchByCategory();
    //     const watchList = localStorage.getItem('watchList');

    //     if(watchList) {
    //         this.setState({
    //             hits: JSON.parse(watchList)
    //         })
    //     }
    };

    componentDidUpdate(pevProps, prevState) {
        if(!prevState.prevState) return;

        if(prevState.category) {
            fetchByCategory({ 
                category: this.state.category.value, 
                onSuccess: this.handleFetchSuccess, 
                onError: this.handleFetchFailure,
            });
            return;
        };
        const prevCategory = prevState.category.value;
        const nextCategory = this.state.category.value;

        // console.log('prevCategory', prevCategory);
        // console.log('nextCategory', nextCategory);
        if(prevCategory !== nextCategory) {
            fetchByCategory({ 
                category: nextCategory, 
                onSuccess: this.handleFetchSuccess, 
                onError: this.handleFetchFailure,
            }, );
        };

        // if(!prevState.titleValue) {
        //     fetchByTitle({
        //         titleValue: this.state.titleValue, 
        //         onSuccess: this.handleFetchSuccess, 
        //         onError: this.handleFetchFailure
        //     })
        // };
        // const prevTitleValue = prevState.titleValue;
        // const nextTitleValue = this.state.titleValue;

        // if(prevTitleValue !== nextTitleValue) {
        //     fetchByCategory({ 
        //         titleValue: nextTitleValue, 
        //         onSuccess: this.handleFetchSuccess, 
        //         onError: this.handleFetchFailure,
        //     }, );
        // };
    };

    handleFetchSuccess = (movies) => {
        this.setState({movies, loading: false})
        console.log(movies);
    };

    // handleFetchTitleSuccess = (movies) => {
    //     this.setState({movies: movies, loading: false})
    //     console.log(movies);
    // };

    handleFetchFailure = (error) => {
        this.setState({ loading: false, error: error.massage})
    };

    handleFetch = () => {
        this.setState({ loading: true, error: null})
    };

    changeCategory = category => {
        this.setState({category})
    };

    handleSearchMovie = title => {
        // evt.preventDefault();
        // fetchByTitle();
        this.setState({ movies: [] });
        fetchByTitle({
            title,
            onSuccess: this.handleFetchSuccess,
            onError: this.handleFetchFailure,
        })

    }


    render() {
        // loading, error
        const { movies, category } = this.state;

        // console.log(titleValue);
        return (
            <div className={styles.app_movies}>
                <div className={styles.wrap_watchList}>
                <p>WatchList</p>
                    {/* <WatchList watchList={watchList}/> */}
                </div>
                <div className={styles.wrap_content}>
                    <div className={styles.wrap_header}>
                        <div className={styles.category_selector}>
                            <p className={styles.category_name}>Search by Category</p>
                            <CategorySelertor options={selectorOption} value={category} onChange={this.changeCategory} />
                        </div>
                        <div className={styles.category_selector}>
                            <p className={styles.category_name}>Search by title</p>
                            <SearchBar onSearch={this.handleSearchMovie}/>
                        </div>
                    </div>
                    <div className={styles.wrap_filmList}>
                        <FilmsList movies={movies}/>
                    </div>
                    
                </div>
            </div>
        )
    }
};