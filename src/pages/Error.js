import React from 'react';
import Header from '../components/Header';
import Errorpage from '../components/Errortext';
import Footer from '../components/Footer';

const Error = () => {
    return (
    <div>
        <div className='body'>
        <Header/>
        <Errorpage/>        
        </div>
        <Footer/>
    </div>
    );
};

export default Error;