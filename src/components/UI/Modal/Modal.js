import React, { Component } from  'react';
import Classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
    
        console.log(" Component Did Update");
    }

    render (){
        return (
            <Aux>
                <Backdrop show={this.props.sendBackdrop} hide={this.props.removeBackDrop}>
                </Backdrop>
                <div className={Classes.Modal}>
                    {this.props.children}
                </div>
            </Aux>      
    
        )
    }
   
}

export default Modal;