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
      ]
    };

    this.squareClick = this.squareClick.bind(this);
    this.definePlayer = this.definePlayer.bind(this);
    this.defineWinner = this.defineWinner.bind(this);
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

  defineWinner(player) {
    if(player === 'XXX') {
      alert('X wins!');
      this.reset();
    } else {
      alert('O wins');
      this.reset();
    }
  }

  squareClick(index) {
    const O_PLAYER = this.state.O_PLAYER;
    const X_PLAYER = this.state.X_PLAYER;

    if(this.state.board[index] === O_PLAYER || this.state.board[index] === X_PLAYER) {
      return;
    }

    this.definePlayer();

    this.state.board.splice(index, 1, this.state.currentPlayer);

    this.winningMove();

  }

  winningMove() {
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
      this.defineWinner(topRow);
    }
    if(middleRow.match(/XXX|OOO/)) {
      this.defineWinner(middleRow);
    }
    if(bottomRow.match(/XXX|OOO/)) {
      this.defineWinner(bottomRow);
    }
    if(topCol.match(/XXX|OOO/)) {
      this.defineWinner(topCol);
    }
    if(middleCol.match(/XXX|OOO/)) {
      this.defineWinner(middleCol);
    }
    if(bottomCol.match(/XXX|OOO/)) {
      this.defineWinner(bottomCol);
    }
    if(leftDiag.match(/XXX|OOO/)) {
      this.defineWinner(leftDiag);
    }
    if(rightDiag.match(/XXX|OOO/)) {
      this.defineWinner(rightDiag);
    }
  }

  reset() {
    this.setState({
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    });
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
