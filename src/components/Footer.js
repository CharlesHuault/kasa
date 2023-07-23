import React from 'react';
import "../styles/components/footer.scss"
import LogoFooter from './LogoFooter';
import Textfooter from './Textfooter';


const Footer = () => {
    return (
        <footer className='footer'>
            <LogoFooter/>
            <Textfooter/>
        </footer>
    );
};

export default Footer;