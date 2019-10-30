import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 100
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
        console.log(this.state);
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
        console.log(this.state);
    }
    render() {
        const disabledBtn = {...this.state.ingredients};
        return (
            <Aux>  
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                passDisabled={disabledBtn}
                clickToAdd={this.addIngredientHandler.bind(this)}
                clickToRemove={this.removeIngredientHandler.bind(this)}></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;