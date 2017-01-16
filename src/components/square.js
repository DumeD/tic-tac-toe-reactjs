import React, { Component } from 'react';

export default class Square extends Component {
  render() {
    return (
      <div className='square' onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}
