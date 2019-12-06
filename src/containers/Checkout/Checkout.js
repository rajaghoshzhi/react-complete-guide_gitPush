import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/OrderSummary/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';


class Checkout extends Component{
 
    
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
                ingredients={this.props.ingredients}               
                cancelBtn={this.cancelCheckout.bind(this)}
                continueBtn={this.continueWithCheckout.bind(this)}>
                     
                </CheckoutSummary>
                {/* <Route path={this.props.match.url + '/contact-data'} 
                component={ContactData} />  */}

                <Route path={this.props.match.url + '/contact-data'} 
                 render={(props)=>{
                     return <ContactData 
                     ingredients={this.props.ingredients}
                     totalPrice = {this.props.totalPrice} 
                     {...props}/>
                 }}/>   
                
                
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps)(Checkout);