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
    this.definePlayer = this.definePlayer.bind(this);
  }

  definePlayer() {
    var currentPlayer = this.state.currentPlayer;
    const O_PLAYER = this.state.O_PLAYER;
    const X_PLAYER = this.state.X_PLAYER;
    switch (currentPlayer) {
      case '':
        this.setState({ currentPlayer: X_PLAYER });
        break;
      case O_PLAYER:
        this.setState({ currentPlayer: X_PLAYER });
        break;
      case X_PLAYER:
        this.setState({ currentPlayer: O_PLAYER });
        break;
      default:
        return null;
    }
  }

  squareClick(index) {
    this.definePlayer();

    const O_PLAYER = this.state.O_PLAYER;
    const X_PLAYER = this.state.X_PLAYER;

    if(this.state.board[index] === O_PLAYER || this.state.board[index] === X_PLAYER) {
      return;
    }

    this.state.board.splice(index, 1, this.state.currentPlayer);

  }

  render() {
    return (
      <div className="App">
        {this.state.board.map((cell, index) => {
          return <Square key={index} cellId={index} onClick={this.squareClick.bind(this, index)} value={cell} />;
        })}
      </div>
    );
  }
}

export default App;
