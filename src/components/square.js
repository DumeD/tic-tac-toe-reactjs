import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    return (
      <div className='square' onClick={this.props.onClick} onMouseDown={this.props.onMouseDown}>
        <p className='value'>{this.props.value}</p>

      </div>
    );
  }
}
