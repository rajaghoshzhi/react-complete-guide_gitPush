import React from 'react';
import classes from './Order.css';

const Order = (props) => {

    console.log(props);
    let row = [];
    for(let param in props.ingredients ){
    if(props.ingredients[param] !== 0){
        row.push(<span key={param} className={classes.Span}>{ param+' ('+props.ingredients[param]+') '}</span>);
    }


}
    return (
        <div className={classes.Order}>
            <p>
                <strong>Ingredients:</strong>
                {row}
            </p>
    <p><strong>Total price:</strong> {props.price}</p>
        </div>
    )
}

export default Order;