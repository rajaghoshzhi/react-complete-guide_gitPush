import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import InputEle from  '../../components/UI/InputEle/InputEle';
class ContactData extends Component {

    state ={
        orderform:{
            name:{
                element:'input',
                elementConfig:{
                    elementType:'text',
                    placeholder:'your Name'
                },
                value:'',
            },
            email:{
                element:'input',
                elementConfig:{
                    elementType:'email',
                    placeholder:'your Email'
                },
                value:'',
            },
            street:{
                element:'input',
                elementConfig:{
                    elementType:'text',
                    placeholder:'street'
                },
                value:'',
            },
            zipcode:{
                element:'input',
                elementConfig:{
                    elementType:'text',
                    placeholder:'postal code'
                },
                value:'',
            }

        },
        loading:false
    }
    placeOrder = (event) =>{
        event.preventDefault();
        this.setState({loading: true});
        // return;
        //problem here
        console.log(this.props);
        const orderObj = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: this.state.orderform.name.value,
                address:{
                    street: this.state.orderform.street.value,
                    zipcode: this.state.orderform.zipcode.value,
                    country: 'india'
                },
                email: this.state.orderform.email.value,
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
            this.setState({ 
                loading: false 
                
            });
        })
    }
    inputChangeHandler = (event,key) =>{
        const updateForm = {...this.state.orderform};
        let updateFormElement = {...updateForm[key]};
        updateFormElement.value = event.target.value;
        updateForm[key] = updateFormElement;
        this.setState({
            orderform:updateForm
        })
        console.log(this.state);
    } 
    render(){        
        let createInputEle = {...this.state.orderform};
        let InputCreationArr = [];
        for(let key in createInputEle){
            InputCreationArr.push(<InputEle 
                key={key}
                value={createInputEle[key].value} 
                element={createInputEle[key].element} 
                type={createInputEle[key].elementConfig.elementType}  
                name={key}
                placeholder={createInputEle[key].elementConfig.placeholder} 
                onChange={(event) =>this.inputChangeHandler(event,key)}/>)
        }
        // console.log(InputCreationArr);
        let form = (
            <form onSubmit={this.placeOrder.bind(this)}>
                {InputCreationArr}
                <Button btnType='Success'>ORDER</Button>
                {/* <input type="submit" value="Submit" /> */}
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