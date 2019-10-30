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
        label={ele.label}></BuildControl>
    });
    return (
        <div className={Classes.BuildControls}>
            {renderControls}
        </div>
    )
}

export default BuildControls;