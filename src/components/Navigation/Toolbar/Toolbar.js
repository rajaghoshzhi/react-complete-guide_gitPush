import React from 'react';
import Classes from './Toolbar.css';
import LogoModule from '../../Logo/Logo';

const Toolbar =(props) => {
    return (
        <header className={Classes.Toolbar}>
            <div>MENU</div>
            <LogoModule/>
            <nav>
                ...hhh
            </nav>
        </header>    
    )
}

export default Toolbar;