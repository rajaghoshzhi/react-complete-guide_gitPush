import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
 
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>  
                <Burger></Burger>
                <div>Builder controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;