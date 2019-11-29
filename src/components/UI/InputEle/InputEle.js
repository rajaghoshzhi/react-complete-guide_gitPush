import React from "react";
import classes from './InputEle.css';

const InputEle =(props) => {
    // console.log(props);
    let inputElement = null;
    switch(props.element){
        case ('input'):
            inputElement=<input className={classes.InputElement} {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props}/>
            break;
        default:
        inputElement = <input className={classes.InputElement} {...props}/>    

    }
    return (
        <div className={classes.InputEle}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            <div className={classes.ErrorMessage}>{props.errormsg}</div>
        </div>
         
    )
}
export default InputEle;