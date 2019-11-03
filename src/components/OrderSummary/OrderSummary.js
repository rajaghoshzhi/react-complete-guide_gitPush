import React from 'react';
import Aux from '../../hoc/Auxillary';
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {
    const ObjPair = Object.keys(props.sendIngredients).map((el)=>{
        return (           
            // <Aux>
                <li key={el}> <span style={{textTransform:'capitalize'}}>{[el]}</span><span style={{float: 'right',marginRight: '100px'}}>{props.sendIngredients[el]}</span> </li>
            // </Aux>
        )
    })
    console.log(ObjPair);

    return (            
        <Aux>
            <h3>Your Order</h3>
            <p> Yipee!! Delicious burger with following Ingredients:</p>
            <ul>
                {ObjPair}
            </ul>
            <p><strong>Total Price: {props.currentPrice}</strong></p>
            <Button btnType='Danger' eventHandler={props.cancelBtn}>Cancel</Button>
            <Button btnType='Success' eventHandler={props.cancelBtn}>Countinue</Button>
        </Aux>
    )
}


export default OrderSummary;