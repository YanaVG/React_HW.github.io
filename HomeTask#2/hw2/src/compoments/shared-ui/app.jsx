import React, { Component } from 'react';
import WatchList from '../shared-ui/watch-list';
import FilmsList from '../shared-ui/films-list';
import SearchBar from '../shared-ui/search-bar/index';
import MainSection from '../shared-ui/main-section';
import PanelHeader from '../shared-ui/panel-header';
import PanelSection from '../shared-ui/panel-section';
import PanelWatchList from '../shared-ui/panel-watchList';
import CategorySelertor from '../shared-ui/category-selector';
import selectorOption from '../selector-options';
import { fetchByCategory, fetchByTitle } from '../secvices/api';
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
        this.getFromLocalStorage();
        // this.setState({ loading: true});
        // fetchByTitle({
        //     titleValue: this.state.titleValue,
        //     onSuccess: this.handleFetchSuccess, 
        //     onError: this.handleFetchFailure,
        // });
    //     // fetchByCategory();
    //     const watchList = localStorage.getItem('watchList');

    //     if(watchList) {
    //         this.setState({
    //             hits: JSON.parse(watchList)
    //         })
    };

    componentDidUpdate(pevProps, prevState) {
        const { category } = this.state;

        if(!category) return;

        const prevCategory = prevState.category;
        const nextCategory = category;

        // console.log('prevCategory', prevCategory);
        // console.log('nextCategory', nextCategory);
        if(prevCategory !== nextCategory) {
            fetchByCategory({ 
                category: nextCategory.value, 
                onSuccess: this.handleFetchSuccess, 
                onError: this.handleFetchFailure,
            }, );
        };
    };

    setToLocalStorage = () => {
        const { watchList } = this.state;

        localStorage.setItem('list', JSON.stringify(watchList));
    };

    getFromLocalStorage = () => {
        const list = JSON.parse(localStorage.getItem('list'));

        if(!list) return;

        this.setState({ watchList: list });
    };

    handleFetchSuccess = movies => {
        this.setState({movies, loading: false})
        console.log(movies);
    };

    handleFetchFailure = error => {
        this.setState({ loading: false, error: error.massage})
    };

    handleFetchMore = movies => {
        this.setState(prevState => ({
            movies: prevState.movies.concat(movies),
        }))
    };

    handleFetch = () => {
        this.setState({ loading: true, error: null})
    };

    changeCategory = category => {
        this.setState({category})
    };

    handleSearchMovie = title => {
        this.setState({ movies: [] });
        fetchByTitle({
            title,
            onSuccess: this.handleFetchMore,
            onError: this.handleFetchFailure,
        })

    };
    
    addMovie = id => {
        console.log('clicked');
        const { movies, watchList } = this.state;

        const dublicateMovie = watchList.find(movie => movie.id === id);
        if(dublicateMovie) return;

        const selectMovie = movies.find(movie => movie.id === id);
        
        this.setState(prevState => ({
            watchList: [selectMovie, ...prevState.watchList]
            }),
        () => this.setToLocalStorage()
        );  
    };

    deleteMovie = id => {
        this.setState(prevState => ({
            watchList: prevState.watchList.filter(movie => movie.id !== id)
        }),
        () => this.setToLocalStorage()
    );
    };


    render() {
        const { movies, category, watchList } = this.state;
        return (
            <div className={styles.app}>
                <PanelWatchList>
                    <WatchList 
                        watchList={watchList}
                        btnDeleteTitle='Del'
                        btnInfoTitle='Info'
                        onDelete={this.deleteMovie}
                        />
                </PanelWatchList>
                <MainSection> 
                    <PanelHeader>
                        <PanelSection>
                            <CategorySelertor
                                options={selectorOption}
                                value={category}
                                onChange={this.changeCategory}
                            />
                        </PanelSection>
                        <PanelSection>
                            <SearchBar onSearch={this.handleSearchMovie} />
                        </PanelSection>
                    </PanelHeader>
                    {movies.length > 0 && (
                        <FilmsList
                            movies={movies}
                            addMovie={this.addMovie}
                            btnAddTitle='Add'
                            btnInfoTitle='Info'
                        />
                    )}
                </MainSection>
            </div>
        );
    }
};