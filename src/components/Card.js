import React from 'react';
import "../styles/components/card.scss"
import { NavLink } from 'react-router-dom';


const Card = ({title, id, cover}) => {
    return (
        <div className='card'>

            <NavLink to={`/${id}`}>
            <h2>{title}</h2>  
            <div className='coverimg' style={{ backgroundImage: `url(${cover})` 
}}></div>        
        </NavLink>
        </div>
    );
};

export default Card;