import React from 'react';
import Header from '../components/Header.js';
import List from '../components/List.js';
import Footer from '../components/Footer.js';
import Bannerhome from '../components/Bannerhome.js';




const Home = () => {
    return (
        <div >
            <div className='body'>
                <Header/>
                <Bannerhome/>
                <List/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;