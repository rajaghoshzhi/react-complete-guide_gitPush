import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Button from '../UI/Button/Button';

class  OrderSummary extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log(" Component Did Update");
    }

    render() {
        const ObjPair = Object.keys(this.props.sendIngredients).map((el)=>{
            return (           
                // <Aux>
                    <li key={el}> <span style={{textTransform:'capitalize'}}>{[el]}</span><span style={{float: 'right',marginRight: '100px'}}>{this.props.sendIngredients[el]}</span> </li>
                // </Aux>
            )
        })
    
        return (            
            <Aux>
                <h3>Your Order</h3>
                <p> Yipee!! Delicious burger with following Ingredients:</p>
                <ul>
                    {ObjPair}
                </ul>
                <p><strong>Total Price: {this.props.currentPrice}</strong></p>
                <Button btnType='Danger' eventHandler={this.props.cancelBtn}>Cancel</Button>
                <Button btnType='Success' eventHandler={this.props.cancelBtn}>Countinue</Button>
            </Aux>
        )
    }
    
}


export default OrderSummary;