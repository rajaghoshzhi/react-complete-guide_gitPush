import React  from 'react';
import Modal from '../components/UI/Modal/Modal';

const errorMessageHandler = (props) => {

    return (
        <div>
            
            <Modal>{props.children}</Modal>
        </div>
    );
}

export default errorMessageHandler;