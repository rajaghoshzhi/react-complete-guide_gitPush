import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Person from './components/Persons/person';

class App extends Component {

  state = {
    person:[
      {key:'r1', name:'raja', age:'30'},
      {key:'m1', name:'mohit', age:'31'},
      {key:'a1', name:'Anupamma', age: '27'},

    ],
    showPerson: false
  }
  render() {
      let enableChild = '';
      
      const personArr =  this.state.person.map((obj)=>{
       if(obj.name === 'Anupamma'){
        enableChild = 'I love to travel the world.';
       }
        return <Person name={obj.name} age={obj.age}>{enableChild}</Person>   
      })

    return (
      <div className={classes.App}>
        <div className={[classes.fstyle,classes.fbold].join(' ')}>Initializing React...</div>
        <button className={classes.button_dsgn}>Toggle Selection</button>
        {personArr}
      </div>
    );
  }
}

export default App;
