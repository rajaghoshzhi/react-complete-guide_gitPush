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
                    required:true
                }
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
                    // pattern:'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
                    pattern:'^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
                }
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
                    required:true
                }
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
                }
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
        //eleObj hold whole object
        // rules holds on the parameter  
        debugger
        let isValid = false;
        if(rules.required){
            if(eleObj.value.length > rules.minLength){
                isValid = true;
            }           
            if(rules.pattern){          
                var reg = new RegExp(rules.pattern);
                var patternMatch = reg.test(eleObj.value);       
                if(patternMatch){
                    if(rules.validation_name === 'zipcode'){
                        if(eleObj.value.length === rules.postalLength){ 
                            isValid = true;
                        }
                    }
                    if(rules.validation_name === 'email'){
                        isValid = true;
                    }
                   
                }
            }
        }
        console.log(eleObj);
        console.log(rules);
        return isValid;
    }
    inputChangeHandler = (event,key) =>{
        const updateForm = {...this.state.orderform};
        let updateFormElement = {...updateForm[key]};
        updateFormElement.value = event.target.value;
        updateForm[key] = updateFormElement;
        let isValid = this.checkvalidity(updateFormElement,updateForm[key]['validation']);
         console.log(isValid);
        updateFormElement.valid = isValid;
        updateForm[key] = updateFormElement;
        this.setState({
            orderform:updateForm
        })
        // console.log(this.state);
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