import React, { Component } from 'react';
import  { connect } from 'react-redux';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
// import Checkout from '../Checkout/Checkout';



// import errorMessageHandler from '../../hoc/errorMessageHandler';

const addOnPrice = {
        salad: 10,
        bacon: 40,
        cheese: 20,
        meat:30  
}
 
class BurgerBuilder extends Component {

    state = {
        //ingredients:{bacon: 0, cheese: 0, meat: 0, salad: 0},
        // ingredients:'',
        // totalPrice: 100,
        purchasable: false,
        loading:false,
        userMessage: {
            status: null,
            message: null
        }
    }
    componentWillMount(){
        axios.get('/ingredients.json').then(response => {
            // this.setState({ingredients: response.data});
            this.props.ing.ingredients = response.data;
            console.log(this.props);
        })
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
        console.log('from continue button burger builder js');
        console.log(this.state);

        var queryParams = []
         for(let ele in this.state.ingredients){
            let val = ele+'='+this.state.ingredients[ele];
            queryParams.push(val);
         }
         queryParams.push('totalPrice='+this.state.totalPrice);
         const finalQueryParams = queryParams.join('&');
            // console.log(finalQueryParams);
            this.props.history.push({
                pathname:'/checkout',
                search:'?'+finalQueryParams
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
                <Burger ingredients={this.props.ing.ingredients}></Burger>
                <BuildControls 
                    passDisabled={disabledBtn}
                    clickToAdd={this.addIngredientHandler.bind(this)}
                    // clickToAdd={() => this.addIngredientHandler(type)}
                    clickToRemove={this.removeIngredientHandler.bind(this)}
                    currentPrice={this.state.totalPrice}
                    sendIngredients={cpyForUpdate}
                    showOrder = {this.showOrderButtonHandler.bind(this)}>
                </BuildControls>
                {/* <Checkout></Checkout> */}
            </Aux>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        ing: state.ingredients
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        // addIngredientHandler: (ingType) => dispatch({type:'ADD_INGREDIENTS',ingType:ingType})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);