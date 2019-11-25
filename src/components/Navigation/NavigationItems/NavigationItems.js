import React from 'react';
import Classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={Classes.NavigationItems} >
            <NavigationItem linkPG="/">Burger Builder</NavigationItem>
            <NavigationItem linkPG="/orders" >Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems;