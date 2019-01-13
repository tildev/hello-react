import React, { Component } from 'react'; // var React = require('react'); var Component = React.Component;
import './App.css'

class App extends Component {
  render() {
    const text ="hello! :)"
    const condition = true;
    const style ={
      backgroundColor:'blue',
      border: '1px solid black',
      height: Math.round(Math.random()*300) + 50,
      width: Math.round(Math.random()*300) + 50,
      webkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }
   return (
     <div className="my-div">
     {/*요소 밖 주석 */}
      <h1>React hello!</h1>
      <h2>{text}</h2>
      {
        condition && 'show' 
      }
      <div style={style}
        // self-closed 태그에서만 작동하는 주석
        /* 이렇게도 작성 가능 */
      />
     </div>
   );
  }
}

export default App;
