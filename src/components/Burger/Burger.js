import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredent';
// import { withRouter } from 'react-router-dom';

const Burger = (props) => {
    // Object.entries return like ['salad',1],['meat',2]; transformIngredients return array of objects
    const transformIngredients = Object.entries(props.ingredients).map((e) => ( { 'name':e[0], 'value':e[1]} ));
    //  console.log(transformIngredients);
    
    let updateRenderPattern =  transformIngredients.map((e,index)=>{
        var arr = []
        for(let i=0;i<e.value;i++){
            arr.push(<BurgerIngredient key={index+'-'+i} type={e.name}></BurgerIngredient>);
        }
        
         return arr;
    }) 
    let transformIngredientsSizeCount = updateRenderPattern.reduce((accumulator,currentValue)=>{
        // console.log(currentValue.length)
        return accumulator += currentValue.length;
    },0)
    
    if(transformIngredientsSizeCount ===0 ){
        updateRenderPattern = <p>Please start adding ingredients !</p>
    }
    return (
        <div className={Classes.Burger}> 
            <BurgerIngredient type='bread-top'></BurgerIngredient>
                {updateRenderPattern}            
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default Burger;