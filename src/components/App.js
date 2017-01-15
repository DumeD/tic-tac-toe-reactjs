import React, { Component } from 'react';
import Square from './square';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      X_PLAYER: 'X',
      O_PLAYER: 'O',
      currentPlayer: 'X',
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    };

    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(index) {
    console.log(index);
  }

  render() {
    return (
      <div className="App">
        {this.state.board.map((cell, index) => {
          return <Square key={index} onClick={() => this.squareClick(index)} value={this.state.currentPlayer} />;
        })}
      </div>
    );
  }
}

export default App;
