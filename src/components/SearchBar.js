import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = { searchText: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.searchText);
    }

    onSearchInputChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className='flex-container'>
                    <label htmlFor='search'>
                        <h2>Image search:</h2>
                    </label>
                    <input 
                        value={this.state.searchText} 
                        onChange={this.onSearchInputChange} 
                        type="text" 
                        className='search-input' 
                    />
                </form>
            </div>
        )
    }
};

export default SearchBar;