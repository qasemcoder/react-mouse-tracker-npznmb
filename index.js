import React, { Component } from 'react';
import { render } from 'react-dom';
import MouseTracker from './MouseTracker';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      // SB has a 29 px high address bar to account for:
      // Ensure container div takes up the entire viewport
      <div style={{height: 'calc(100vh - 29px)'}}>
        <MouseTracker  />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
