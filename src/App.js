import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Person from './components/Persons/person';

class App extends Component {
  render() {
    return (

      <div className={classes.App}>
        <div className={[classes.fstyle,classes.fbold].join(' ')}>Initialize React...</div>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <p></p>
      </div>
    );
  }
}

export default App;
