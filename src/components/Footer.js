import React from 'react';
import "../styles/components/footer.scss"   
import Textfooter from './Textfooter';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logofooter'>
                <img src="../LOGOblc.svg" alt="Logo kasa" />
            </div>

            <Textfooter/>
        </footer>
    );
};

export default Footer;