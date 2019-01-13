import React, { Component } from 'react'; // var React = require('react'); var Component = React.Component;

class App extends Component {
  render() {
    const text ="hello! :)"
    const condition = true;
   return (
     <div>
      <h1>React hello!</h1>
      <h2>{text}</h2>
      {
        condition? 'true' : 'false'
      }
     </div>
   );
  }
}

export default App;
