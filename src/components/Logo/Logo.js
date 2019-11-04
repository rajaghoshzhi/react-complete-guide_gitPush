import React from 'react';
import LogoImg  from '../../assets/images/burger-logo.png';
import Classes from './Logo.css';

const Logo = () => {
  return (
      <div className={Classes.Logo}>
          <img className={Classes.img} src={LogoImg}/> 
      </div>    
      
  )   
}

export default Logo;