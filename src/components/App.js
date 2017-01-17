import React, { Component } from 'react';
import Square from './square';
import ResetButton from './resetButton';
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
      ],
      winningCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
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
    var board = this.state.board;

    var topRow = board[0]+board[1]+board[2];
    var middleRow = board[3]+board[4]+board[5];
    var bottomRow = board[6]+board[7]+board[8];
    var topCol = board[0]+board[3]+board[6];
    var middleCol = board[1]+board[4]+board[7];
    var bottomCol = board[2]+board[5]+board[8];
    var leftDiag = board[0]+board[4]+board[8];
    var rightDiag = board[2]+board[4]+board[6];

    if(topRow.match(/XXX|OOO/)) {
      this.reset();
    }
    if(middleRow.match(/XXX|OOO/)) {
      return;
    }
    if(bottomRow.match(/XXX|OOO/)) {
      return;
    }
    if(topCol.match(/XXX|OOO/)) {
      return;
    }
    if(middleCol.match(/XXX|OOO/)) {
      return;
    }
    if(bottomCol.match(/XXX|OOO/)) {
      return;
    }
    if(leftDiag.match(/XXX|OOO/)) {
      return;
    }
    if(rightDiag.match(/XXX|OOO/)) {
      return;
    }

  }

  reset() {
    this.setState({
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='button'>
          <ResetButton onClick={this.reset.bind(this)} />
        </div>
        {this.state.board.map((cell, index) => {
          return <Square key={index} cellId={index} onClick={this.squareClick.bind(this, index)} value={cell} />;
        })}
      </div>
    );
  }
}

export default App;
