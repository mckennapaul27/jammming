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
      searchResults: [
        {
        name:"Despacito",
        artist:"Luis Fonsi",
        album:"Las Plataformas"
        },
      ],
      playlistName: "myPlayList",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
  }


    addTrack(track) {
      let tracks = this.state.playlistTracks;
      if(tracks.includes(track)) {
        console.log('Track already in Playlist');
      } else {
        tracks.push(track);
        this.setState({playlistTracks: tracks});
      }
    }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
