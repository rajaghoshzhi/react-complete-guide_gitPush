import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    console.log('checkout summary');
    console.log(props);
    return (
        <div className={Classes.CheckoutSummary}>
            <h3> Hope you choose a delicious Burger !!</h3>
            <Burger ingredients={props.ingredients}></Burger>   

            <Button btnType='Danger' eventHandler={props.cancelBtn}>Cancel</Button>
            <Button btnType='Success' eventHandler={props.continueBtn}>Countinue</Button>
        </div>
    )

}

export default CheckoutSummary;