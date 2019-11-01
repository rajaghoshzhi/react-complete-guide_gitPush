import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        purchasable: false
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
    calledBackDrop = () => {
        console.log("I  am called ");
    }

    render() {
        const disabledBtn = {...this.state.ingredients};
        const cpyForUpdate = {...this.state.ingredients};
        let ModalRender = null;
        if(this.state.purchasable === true){
            ModalRender =  <Modal 
            sendBackdrop={this.state.purchasable}
            removeBackDrop = {this.showOrderButtonHandler.bind(this)}>
            <OrderSummary
            sendIngredients={cpyForUpdate}>                        
            </OrderSummary>
        </Modal>
        }

        return (
            <Aux> 
                {ModalRender}
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