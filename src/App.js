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

  clickEventHandler = (event) => {
    var togglePerson = false;
    if(this.state.showPerson === false){
      togglePerson = true;
    }else{
      togglePerson = false;
    }
    this.setState({
      showPerson:togglePerson
    })
  }
  changeEventHandler = (keyEle,event) =>{
    const personIndex = this.state.person.findIndex((el)=>{
      return el.key == keyEle;
    })
    let cpyPersonArr = [...this.state.person];
    cpyPersonArr[personIndex].name = event.target.value;
    this.setState({
      person:cpyPersonArr
    })

  }
  render() {
      let enableChild = '';
      let personArr =  this.state.person.map((obj)=>{
       if(obj.name === 'Anupamma'){
        enableChild = 'I love to travel the world.';
       }
        return <Person key={obj.key} name={obj.name} age={obj.age} changed={this.changeEventHandler.bind(this,obj.key)}>{enableChild}</Person>   
      })

      if(this.state.showPerson === false){
        personArr = null;
      }
    return (
      <div className={classes.App}>
        <div className={[classes.fstyle,classes.fbold].join(' ')}>Initializing React...</div>
        <button className={classes.button_dsgn} onClick={this.clickEventHandler.bind(this)} value={this.state.showPerson}>Toggle Selection</button>
        {personArr}
      </div>
    );
  }
}

export default App;
