import React from 'react';
import "../styles/components/footer.scss"   


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logofooter'>
                <img src="../LOGOblc.svg" alt="Logo kasa" />
            </div>
            <h3>
                © 2020 Kasa. All 
                <span>rights reserved</span>
            </h3>
        </footer>
    );
};

export default Footer;