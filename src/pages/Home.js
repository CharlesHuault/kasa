import React from 'react';
import Header from '../components/Header.js';
import List from '../components/List.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Bannerhome.js';


const Home = () => {
    return (
        <div >
            <div className='body'>
                <Header/>
                <Banner/>
                <List/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;