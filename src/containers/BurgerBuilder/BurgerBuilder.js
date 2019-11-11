import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';



// import errorMessageHandler from '../../hoc/errorMessageHandler';

const addOnPrice = {
        salad: 10,
        bacon: 40,
        cheese: 20,
        meat:30  
}
 
class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 0,
            bacon:0,
            cheese: 0,
            meat:0  
        },
        totalPrice: 100,
        purchasable: false,
        loading:false,
        userMessage: {
            status: null,
            message: null
        }
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        let newIngredientList = {...this.state.ingredients};
        newIngredientList[type] = newCount;
        let updatedTotalPrice = this.state.totalPrice;
        updatedTotalPrice = updatedTotalPrice + addOnPrice[type];
        this.setState({
            ingredients:newIngredientList,
            totalPrice:updatedTotalPrice
        });
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<= 0){
            return;
        }
        const newCount = oldCount - 1;
        let newIngredientList = {...this.state.ingredients};
        newIngredientList[type] = newCount;
        let updatedTotalPrice = this.state.totalPrice;
        updatedTotalPrice = updatedTotalPrice - addOnPrice[type];
        this.setState({
            ingredients:newIngredientList,
            totalPrice:updatedTotalPrice
        });
    }
    showOrderButtonHandler = () => {
        
        let showHideBackdrop = this.state.purchasable===false ? true : false;
        this.setState({
            purchasable: showHideBackdrop
        })
    }
    continueOrderButtonHandler = () => {
        this.setState({ loading: true});
        const orderObj = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
            // this.showOrderButtonHandler();
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
            // this.showOrderButtonHandler();
            // console.log(error);
        })
    }
    calledBackDrop = () => {
        console.log("I  am called ");
    }
   
    render() {
        const disabledBtn = {...this.state.ingredients};
        const cpyForUpdate = {...this.state.ingredients};
        let ModalRender = null;
        let orderSummary = <OrderSummary
        sendIngredients={cpyForUpdate}
        currentPrice={this.state.totalPrice}
        cancelBtn={this.showOrderButtonHandler.bind(this)}
        continueBtn = {this.continueOrderButtonHandler.bind(this)}
        usermsg= {this.state.userMessage}
        >                        
        </OrderSummary>;
        if(this.state.loading){
            orderSummary = <Spinner />;
        }
        
        if(this.state.purchasable === true){           
            ModalRender =  <Modal 
            sendBackdrop={this.state.purchasable}
            removeBackDrop = {this.showOrderButtonHandler.bind(this)}>

            {orderSummary} 
            

        </Modal>
        }

     

        return (

            <Aux>        
                {ModalRender}
                {/* <errorMessageHandler></errorMessageHandler> */}
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    passDisabled={disabledBtn}
                    clickToAdd={this.addIngredientHandler.bind(this)}
                    clickToRemove={this.removeIngredientHandler.bind(this)}
                    currentPrice={this.state.totalPrice}
                    sendIngredients={cpyForUpdate}
                    showOrder = {this.showOrderButtonHandler.bind(this)}>
                </BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;