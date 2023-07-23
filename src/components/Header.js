import React from 'react';
import Logokasa from './Logokasa';
import Navigation from './Navigation';
import "../styles/components/header.scss"

const Header = () => {
    return (
        <div className='header'>
            <Logokasa/>
            <Navigation/>
        </div>
    );
};

export default Header;