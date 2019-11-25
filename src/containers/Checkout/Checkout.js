import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/OrderSummary/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';


class Checkout extends Component{
 
    state = {
        ingredients:'',
        totalPrice:0
    }
    componentDidMount(){
        var ingredients = {};
        const urlParams = new URLSearchParams(this.props.location.search);
        for(let param of urlParams.entries()){
            if(param[0] ==='totalPrice'){
               var tPrice = parseInt(param[1],10);      
            }else{
                ingredients[param[0]] = parseInt(param[1],10);      
            }
                  
        }
        // console.log('get params')
       
       this.setState({ingredients:ingredients,totalPrice: tPrice});
        // console.log(this.state);
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
                {/* <Route path={this.props.match.url + '/contact-data'} 
                component={ContactData} />  */}

                <Route path={this.props.match.url + '/contact-data'} 
                 render={(props)=>{
                     return <ContactData 
                     ingredients={this.state.ingredients}
                     totalPrice = {this.state.totalPrice} 
                     {...props}/>
                 }}/>   
                
                
            </div>
        )
    }
}

export default Checkout;