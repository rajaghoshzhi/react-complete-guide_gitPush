import React from  'react';
import Classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';


const Modal = (props) => {
 console.log(props);
    return (
        <Aux>
            <Backdrop show={props.sendBackdrop} hide={props.removeBackDrop}>
            </Backdrop>
            <div className={Classes.Modal}>
                {props.children}
            </div>
        </Aux>      

    )
}

export default Modal;