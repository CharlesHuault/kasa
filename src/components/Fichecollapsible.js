import React from 'react';
import Collapsible from './Collapsible';
import "../styles/components/fichecollapsible.scss"


const Fichecollapsible = ({data}) => {
    return (
        <div className='deroulants'>
            <div className='description'>
            <Collapsible>
            <p>{data.description}</p>
            </Collapsible>
            </div>

            <div className='equipements'>
            <Collapsible>

            <ul>
            {data.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
            </ul>
            </Collapsible>
            </div>
        </div>
    );
};

export default Fichecollapsible;