import React from 'react';
import "../styles/components/list.scss"
import Card from './Card';
import data from "../assets/logementsjson.json"


const List = () => {
    return (
        <div className='cardslist'>
            <ul>
                {data.map((logement) => {return(
                <li key={logement.id}><Card  id={logement.id} title={logement.title} cover={logement.cover}/></li>
            )})}         
            
            </ul>
        </div>
    );
};

export default List;