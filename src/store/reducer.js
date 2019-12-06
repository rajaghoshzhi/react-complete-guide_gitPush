const initialState = {
    ingredients:{bacon: 0, cheese: 0, meat: 0, salad: 0},
    totalPrice: 100,
    defaultPrice:100
}
const rootReducer = (state = initialState,action) => {

    switch(action.type){
        case 'ADD_INGREDIENTS':
            
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingTyp]: state.ingredients[action.ingTyp] + 1,
                },
                totalPrice: state.totalPrice + action.price
            }
        case 'REMOVE_INGREDIENTS':
                console.log(state)
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingTyp]: state.ingredients[action.ingTyp] <= 0 ? 0 :state.ingredients[action.ingTyp] - 1  ,
                },
                totalPrice: state.totalPrice > state.defaultPrice? state.totalPrice - action.price: state.defaultPrice
            }

    }

    return state;

}

export default rootReducer;
