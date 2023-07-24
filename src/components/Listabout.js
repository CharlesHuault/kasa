import React from 'react';
import "../styles/components/listabout.scss"
import Collapsible from './Collapsible';

const Listabout = () => {
    return (
        <div className='listabout'>
            <ul>
                <li>
                    
                    <Collapsible title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes">                         
                    </Collapsible>                  
                </li>
                <li>             
                    <Collapsible title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertrubation du voisinage entraînera une exclusion de notre plateforme">                        
                    </Collapsible>
                </li>
                <li>          
                    <Collapsible title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertrubation du voisinage entraînera une exclusion de notre plateforme">                      
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurités domestique pour nos hôtes">
                    </Collapsible>
                </li>
            </ul>
            
        </div>
    );
};

export default Listabout;