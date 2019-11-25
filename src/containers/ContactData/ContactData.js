import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
class ContactData extends Component {

    state ={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }
    placeOrder = (event) =>{
        event.preventDefault();
        this.setState({loading: true});
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
                loading: false 
            });
            this.props.history.push('/');
        })
        .catch(error =>{
            // console.log(error.code);
            this.setState({ 
                loading: false 
                
            });
        })
    }
    render(){
        let form = (
            <form>
            <input type='text' className= {classes.Input}  name='name' placeholder='Enter your name' />
            <input type='email'  className= {classes.Input} name='email' placeholder='Enter your email ' />
            <input type='text' className= {classes.Input}  name='street' placeholder='Enter your street' />
            <input type='text' className= {classes.Input}  name='postalCode' placeholder='Enter your postal Code' />
            <Button btnType='Success' eventHandler={this.placeOrder.bind(this)}>ORDER</Button>
        </form>
        );
        if(this.state.loading){
            form = <Spinner></Spinner>;
        }
        return (
            <div className={classes.ContactData}>
                <h5>Enter your details</h5>
                {form}
            </div>
        )
    }
}
export default ContactData;