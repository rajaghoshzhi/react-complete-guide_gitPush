import React from 'react';
import classes from './Order.css';

const Order = (props) => {

    return (
        <div className={classes.Order}>
            <p>
                <strong>Ingredients</strong>
                <span className={classes.Span}>salad(2)</span>
                <span className={classes.Span}>Bacon(1)</span>
            </p>
            <p><strong>Total price:</strong> 100</p>
        </div>
    )
}

export default Order;