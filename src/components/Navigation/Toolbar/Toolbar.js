import React from 'react';
import Classes from './Toolbar.css';
import LogoModule from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar =(props) => {
    return (
        <header className={Classes.Toolbar}>
            <div>MENU</div>
            <LogoModule/>
            <nav>
             <NavigationItems></NavigationItems>
            </nav>
        </header>    
    )
}

export default Toolbar;