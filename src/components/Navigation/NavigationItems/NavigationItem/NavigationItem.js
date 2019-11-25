import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './NavigationItem.css';

 
const NavigationItem = (props) => {
    return (

        <li className={Classes.NavigationItem}>
            <NavLink to={props.linkPG} >{props.children}</NavLink>
        </li>
    )
}

export default NavigationItem;