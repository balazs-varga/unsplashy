import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className='flex-container'>
                    <label htmlFor='search'>
                        <h2>Image search:</h2>
                    </label>
                    <input type="text" className='search-input' />
                </form>
            </div>
        )
    }
};

export default SearchBar;