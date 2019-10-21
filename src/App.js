import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Person from './components/person';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Person></Person>
      </div>
    );
  }
}

export default App;
