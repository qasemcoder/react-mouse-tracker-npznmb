import React, { Component } from 'react';

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://via.placeholder.com/40?text=cat" 
          style={{ 
            position: 'absolute',
            left: mouse.x, top: mouse.y 
          }}
        />
    );
  }
}