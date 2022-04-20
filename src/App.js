import axios from 'axios';
import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const BASE_UNSPLASH_API_URL = 'https://api.unsplash.com';

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (searchText) => {
    const response = await axios.get(`${BASE_UNSPLASH_API_URL}/search/photos`, {
      params: { query: searchText },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <span>Found: {this.state.images.length} images</span>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
