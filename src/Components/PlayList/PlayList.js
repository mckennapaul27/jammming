import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';

class PlayList extends React.Component {


  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);    
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue="Default Playlist" onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
};

export default PlayList;
