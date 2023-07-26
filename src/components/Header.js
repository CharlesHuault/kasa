import React from 'react';
import Navigation from './Navigation';
import "../styles/components/header.scss"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
            <img src="../LOGO.svg" alt="Logo Kasa" />
        </div>
            <Navigation/>
        </div>
    );
};

export default Header;