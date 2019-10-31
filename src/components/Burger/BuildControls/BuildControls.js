import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import Classes from './BuildControls.css';

const Controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const BuildControls = (props) =>{
  const renderControls =   Controls.map((ele)=>{
        return <BuildControl 
        addEle={props.clickToAdd.bind(this,ele.type)} 
        removeEle={props.clickToRemove.bind(this,ele.type)} 
        key={ele.label}
        label={ele.label}
        disableBtn={props.passDisabled[ele.type]}></BuildControl>
    });

    
    const sumOfIngredients = Object.keys(props.sendIngredients).map((el)=>{
        return props.sendIngredients[el]
    }).reduce((accumulator,looper)=>{

        return accumulator += looper;
    },0);
    let disableOrderNow = false;
    if(sumOfIngredients > 0 ){
        disableOrderNow = true;
    }
    return (
        <div className={Classes.BuildControls}>
            <p className={Classes.Bold}>Current Price: {props.currentPrice}</p>
            {renderControls}             
            <button className={Classes.OrderButton} disabled={!disableOrderNow} onClick={props.showOrder}>ORDER NOW</button>   
        </div>
    )
}

export default BuildControls;