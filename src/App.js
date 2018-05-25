import React, { Component } from 'react';
import './App.css';
import MapGame from './map/components/map';
import Tile from './map/components/tile';
import Monster from './map/components/monster';

class App extends Component {

  render() {
  	let rows = [];
	for (var i = 0; i < 440; i++) {
    rows.push(<Tile key={i}> </Tile>);
	}
    return (
      <MapGame>
		  {rows}
		  <Monster/>
		









      </MapGame>




    );
  }
}

export default App;
