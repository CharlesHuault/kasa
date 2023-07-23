import React from 'react';
import Header from '../components/Header';
import Bannerabout from '../components/Bannerabout';
import Listabout from '../components/Listabout';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
        <div className='body'>
            <Header/>
            <Bannerabout/>
            <Listabout/>
            
        </div>
            <Footer/>
        </div>
    );
};

export default About;