
import React from 'react';
import Classes from './Backdrop.css';

const Backdrop = (props) => {
    // console.log(props.passBackdropState);
    let BackdropScreen = null;
    // if(props.passBackdropState === true){
    //     BackdropScreen = null;
    // }
    if(props.show === true){
         BackdropScreen = <div className={Classes.Backdrop}></div>
    }
    return (
        <div onClick={props.hide}>
            {BackdropScreen}
        </div>
    )
}

export default Backdrop;