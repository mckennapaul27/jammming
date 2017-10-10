import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          name: 'Despacito'
        },
        {
          artist: "Luis Fonsi"
        },
        {
          album: "Paso a Paso"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults}/>
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
