import React from 'react';
import classes from './person.css';

const Person  = (props) => {

    return (
        <div className = {classes.decorateBox}>
            <p className={classes.lableName}> Enter your Details:</p>
            <input type='text' value={props.name}/>
            <p className={classes.lableName}>My Name is {props.name} and my age is {props.age}. {props.children}</p>
        </div>
        
        
    )
}

export default Person;