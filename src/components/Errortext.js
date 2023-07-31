import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/components/errortext.scss"


const Errorpage = () => {
    return (
        <div className='Errortext'>
            <div className='err404'>
                <img src="../404.svg" alt="logo 404" />
            </div>
            <div className='oups'>
                Oups! La page que 
                <span> vous demandez n'existe pas.</span>
            </div>
            <NavLink to="/" className='link'>
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    );
};

export default Errorpage;