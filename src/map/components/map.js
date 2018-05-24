import React, { Component } from 'react';
import '../styles/index.css';
import Tile from './tile';

const mapGame = props => (
	<div className = 'content'>
		<div className = 'map'>
		{props.children}
		</div>
	</div>
);

export default mapGame;