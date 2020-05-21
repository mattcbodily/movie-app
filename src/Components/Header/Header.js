import React from 'react';
import menuIcon from '../../assets/menu.svg';
import './Header.css';

export default props => (
    <div className='header'>
        <h1>Name Here</h1>
        <img src={menuIcon} alt='hamburger menu'/>
    </div>
)