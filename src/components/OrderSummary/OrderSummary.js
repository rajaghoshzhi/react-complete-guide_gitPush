import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Button from '../UI/Button/Button';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class  OrderSummary extends Component {

   

    render() {
        let userNotice = null;
        const ObjPair = Object.keys(this.props.sendIngredients).map((el)=>{
            return (           
                // <Aux>
                    <li key={el}> <span style={{textTransform:'capitalize'}}>{[el]}</span><span style={{float: 'right',marginRight: '100px'}}>{this.props.sendIngredients[el]}</span> </li>
                // </Aux>
            )
        }) 
            
        if(this.props.usermsg.status){
            if(this.props.usermsg.status === 'error'){
                userNotice = <Alert color="danger">
                 { this.props.usermsg.message}
               </Alert>
            }
            if(this.props.usermsg.status === 'success'){
                userNotice = <Alert color="success">
                 { this.props.usermsg.message}
               </Alert>
            }
        }
       
        return (            
            <Aux>
                {userNotice}
                <h3>Your Order</h3>
                <p> Yipee!! Delicious burger with following Ingredients:</p>
                <ul>
                    {ObjPair}
                </ul>
                <p><strong>Total Price: {this.props.currentPrice}</strong></p>
                <Button btnType='Danger' eventHandler={this.props.cancelBtn}>Cancel</Button>
                <Button btnType='Success' eventHandler={this.props.continueBtn}>Countinue</Button>
            </Aux>
        )
    }
    
}


export default OrderSummary;