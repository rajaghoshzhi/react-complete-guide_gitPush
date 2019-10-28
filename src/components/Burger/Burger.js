import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredent';

const Burger = (props) => {

    return (
        <div className={Classes.Burger}> 
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            <BurgerIngredient type='salad'></BurgerIngredient>
            <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='meat'></BurgerIngredient>
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default Burger;