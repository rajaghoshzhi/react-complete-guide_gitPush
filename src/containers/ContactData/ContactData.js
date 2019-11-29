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
                valid:false,
                validation:{
                    minLength: 4,
                    validation_name:'name',  
                    required:true
                },
                errorMsg:''
            },
            email:{
                element:'input',
                elementConfig:{
                    elementType:'email',
                    placeholder:'your Email'
                },
                value:'',
                valid:false,
                validation:{
                    required:true,
                    validation_name:'email',  
                    pattern:"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                },
                errorMsg:''
            },
            street:{
                element:'input',
                elementConfig:{
                    elementType:'text',
                    placeholder:'street'
                },
                value:'',
                valid:false,
                validation:{
                    required:true,
                    validation_name:'street'
                },
                errorMsg:''
            },
            zipcode:{
                element:'input',
                elementConfig:{
                    elementType:'text',
                    placeholder:'postal code'
                },
                value:'',
                valid:false,
                validation:{
                    required:true,
                    postalLength:6,
                    validation_name:'zipcode',
                    pattern: '^(0|[1-9][0-9]*)$'
                },
                errorMsg:''
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
    checkvalidity =(eleObj,rules) => {
        let returnObj = {}
        let isValid = false;
        let error = '';
        if(rules.required){
            if(rules.validation_name === 'name'){
                if(eleObj.value.trim().length >= rules.minLength){
                    isValid = true;
                } else{
                    error = 'Name should be >= 4 letters';
                } 
            }
              
            if(rules.validation_name === 'street'){
                if(eleObj.value.trim().length > 1){
                    isValid = true;
                } else {
                    error = 'Street is required';
                }                 
            }      
            if(rules.pattern){          
                var reg = new RegExp(rules.pattern);
                var patternMatch = reg.test(eleObj.value);       
                if(patternMatch){
                    if(rules.validation_name === 'zipcode'){
                        if(eleObj.value.length === rules.postalLength){ 
                            isValid = true;
                        }else{
                            error = 'Zipcode is required';
                        }
                    }
                    if(rules.validation_name === 'email'){
                        isValid = true;
                    }
                   
                }else{
                    if(rules.validation_name === 'zipcode'){
                        error = 'Zipcode is not valid';
                    }
                    if(rules.validation_name === 'email'){
                        error = 'Email is not valid';
                    }
                }
            }
        }
        // console.log(eleObj);
        // console.log(rules);
        returnObj.status = isValid;
        returnObj.error = error;
        return returnObj;
    }
    inputChangeHandler = (event,key) =>{
        const updateForm = {...this.state.orderform};
        let updateFormElement = {...updateForm[key]};
        updateFormElement.value = event.target.value;
        updateForm[key] = updateFormElement;
        let isValid = this.checkvalidity(updateFormElement,updateForm[key]['validation']);
        //  console.log(isValid);
        updateFormElement.valid = isValid.status;
        updateFormElement.errorMsg = isValid.error;
        updateForm[key] = updateFormElement;
        this.setState({
            orderform:updateForm
        })
        // console.log(this.state);
    } 
    render(){        
        console.log(this.state)
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
                errormsg = {this.state.orderform[key].errorMsg} 
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