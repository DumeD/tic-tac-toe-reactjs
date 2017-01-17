import React, { Component } from 'react';

export default class ResetButton extends Component {
  render() {
    return (
      <div>
        <button type='button' onClick={this.props.onClick}>Reset</button>
      </div>
    );
  }
}
