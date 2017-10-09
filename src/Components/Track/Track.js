import React from 'react';
import './Track.css';

class Track extends React.Component {

  renderAction() {
    if(isRemoval) {
      Track-action = '-'
    } else {
      Track-action = '+'
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action"></a>
      </div>
    );
  }
};

export Track;
