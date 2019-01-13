import React, { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      //<ValidationSample/>
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref }/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          scroll to bottom
        </button>
      </div>
    );
  }
}

export default App;
