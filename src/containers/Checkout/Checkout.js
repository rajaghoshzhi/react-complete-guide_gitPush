import React, { Component } from 'react';
import CheckoutSummary from '../../components/OrderSummary/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
 
    state = {
        ingredients:''
    }
    componentDidMount(){
    //   console.log(this.state.ingredients[0]);
        var ingredients = {}
        const urlParams = new URLSearchParams(this.props.location.search);
        // console.log(urlParams.entries());
        // console.log(urlParams.entries());
        for(let param of urlParams.entries()){
            ingredients[param[0]] = parseInt(param[1]);            
        }
        this.setState({ingredients:ingredients});
        console.log(ingredients);
    }
    cancelCheckout = () => {
        this.props.history.goBack();
    }
    continueWithCheckout = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                cancelBtn={this.cancelCheckout.bind(this)}
                continueBtn={this.continueWithCheckout.bind(this)}>                    
                </CheckoutSummary>
            </div>
        )
    }
}

export default Checkout;