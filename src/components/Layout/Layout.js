import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';


const layout = (props) =>{
   return ( 
    <Aux>
        <div className={Classes.Content}> Toolbar,sideDrawer,backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
    
   )
}

export default layout;