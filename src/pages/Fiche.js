import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fichedatacontainer from '../components/Fichedatacontainer';




const Fiche = () => {
    return (
        <div>
            <div className='body'>
            <Header/>              
            <Fichedatacontainer/>   
            </div>
            <Footer/>
        </div>
    );
};

export default Fiche;