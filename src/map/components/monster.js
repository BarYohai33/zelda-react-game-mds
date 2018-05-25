import React, { Component } from 'react';
import '../styles/index.css';
import Style from '../styles/style';

const mouvements = {
	down: {
		move1: 1,
		stay: 5,
		move2: 9,
	},
	left: {
		move1: 2,
		stay: 6,
		move2: 10,
	},
	right: {
		move1: 3,
		stay: 7,
		move2: 11,
	},
	up: {
		move1: 4,
		stay: 8,
		move2: 12,
	},
};

class Monster extends Component {
  constructor() {
  	super();

  	this.state = {
  		direction: 'down',
  		posture: 'stay',
  		posX: 310,
  		posY: 35,
  	};

  	this.handleChangeDirection = this.handleChangeDirection.bind(this);
  }

  handleChangeDirection(key) {
  	// variables
  	let direction = '';
  	let posture = '';
  	let posX = this.state.posX;
  	let posY = this.state.posY;
  	const stepUpDown = 37.5;
    const stepRightLeft = 41.5;

  	// direction
  	if (key === "ArrowUp") {
  		direction = 'up';
  		if (this.state.posY !== 35) posY = this.state.posY - stepUpDown;
  	}
  	if (key === "ArrowLeft") {
  		direction = 'left';
  		if (this.state.posX !== 310) posX = this.state.posX - stepRightLeft;
  	}
  	if (key === "ArrowRight") {
  		direction = 'right';
  		if (this.state.posX < window.innerWidth - 374) posX = this.state.posX + stepRightLeft;
  	}
  	if (key === "ArrowDown") {
  		direction = 'down';
  		if (this.state.posY < window.innerHeight - 110) posY = this.state.posY + stepUpDown;
  	}

  	// posture
  	if (this.state.direction === direction) {
  		if (this.state.posture === 'stay') posture = 'move1';
  		if (this.state.posture === 'move1') posture = 'move2';
  		if (this.state.posture === 'move2') posture = 'move1';
  	} else {
  		posture = 'stay';
  	}
  	
  	// newState
  	this.setState({ direction, posture, posX, posY });
  }

  render() {
  	const { direction, posture, posX, posY } = this.state;
    return (
        <div
        	className={`icone-${mouvements[direction][posture]}`}
        	style={Style.movePlayer(posX, posY)}
        	onKeyDown={e => this.handleChangeDirection(e.key)}
        	tabIndex="0"
        />
    );
  }
}

export default Monster;
