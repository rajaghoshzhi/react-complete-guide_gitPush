import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {

    state ={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }
    placeOrder = (event) =>{
        event.preventDefault();
        console.log('contact details')
        console.log(this.props);
        const orderObj = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'raja ghosh',
                address:{
                    street: 'teststreet',
                    zipcode:'825409',
                    country: 'india'
                },
                email: 'rajaghosh@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json',orderObj)
        .then(response => {
            this.setState({ 
                loading: false ,
                userMessage:{
                    status: 'success',
                    message: 'Data Saved Successfully'
                    
                }
            });
            console.log(response);
        })
        .catch(error =>{
            // console.log(error.code);
            this.setState({ 
                loading: false ,
                userMessage:{
                    status: 'error',
                    message: error.message
                    
                }
            });
        })
    }
    render(){
        return (
            <div className={classes.ContactData}>
                <h5>Enter your details</h5>
                <form>
                    <input type='text' className= {classes.Input}  name='name' placeholder='Enter your name' />
                    <input type='email'  className= {classes.Input} name='email' placeholder='Enter your email ' />
                    <input type='text' className= {classes.Input}  name='street' placeholder='Enter your street' />
                    <input type='text' className= {classes.Input}  name='postalCode' placeholder='Enter your postal Code' />
                    <Button btnType='Success' eventHandler={this.placeOrder.bind(this)}>ORDER</Button>
                </form>
            </div>
        )
    }
}
export default ContactData;