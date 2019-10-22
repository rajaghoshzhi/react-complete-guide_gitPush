import React from 'react';
import classes from './person.css';

const Person  = () => {

    return (
        <div>
            <input type='text'/>
            <p className={classes.lableName}>My Name is:</p>
        </div>
        
        
    )
}

export default Person;