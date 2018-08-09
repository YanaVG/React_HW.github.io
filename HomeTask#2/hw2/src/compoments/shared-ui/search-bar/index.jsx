import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button'
import styles from './style.css';

export default class SearchBar extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    state = {
        title: ''
    };

    handleChange = e => {
        this.setState({ title: e.target.value })
        console.log(this.state.title);
    }

    handleSubmit = e => {
        const { onSearch } = this.props;
        const { title } = this.state;
        e.preventDefault();

        onSearch({ title });
        this.setState({
            title: ''
        });
    }


    render() {
        const { title } = this.state;

        return (
            <form className={styles.wrap} onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter movie title..." 
                    value={title}
                    onChange={this.handleChange}
                    required 
                    />
                <Button  
                    type="submit" 
                    label="Search"
                    />
            </form>
        )
    }
}

// const SearchBar = ({ titleValue, onSubmit }) => (
//     <form className={styles.wrap} onSubmit={onSubmit}>
//         <input type="text" value={titleValue} />
//         <Button label="Search" type="submit"/>
//     </form>
// );

// SearchBar.propTypes = {
//     onChange: PropTypes.func,
//     value: PropTypes.string
// };

// export default SearchBar;