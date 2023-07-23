import React from 'react';
import "../styles/components/listabout.scss"
import Collapsible from './Collapsible';

const Listabout = () => {
    return (
        <div className='listabout'>
            <ul>
                <li className='fiabilité'>
                    
                    <Collapsible> 
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toues les informations sont régulièrement vérifiées par nos équipes</p> 
                    </Collapsible>                  
                </li>
                <li className='respect'>             
                    <Collapsible>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertrubation du voisinage entraînera une exclusion de notre plateforme</p>
                    </Collapsible>
                </li>
                <li className='service'>          
                    <Collapsible>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertrubation du voisinage entraînera une exclusion de notre plateforme</p>
                    </Collapsible>
                </li>
                <li className='securite'>
                    <Collapsible>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurités domestique pour nos hôtes</p>
                    </Collapsible>
                </li>
            </ul>
            
        </div>
    );
};

export default Listabout;