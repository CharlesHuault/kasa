import React from 'react';
import "../styles/components/fichehost.scss"

const Fichehost = ({data}) => {
    const hostNameArray = data.host.name.split(' ');

    const hostNameElements = hostNameArray.map((namePart, index) => (
      <React.Fragment key={index}>
        {namePart}
        {index < hostNameArray.length - 1 && <br />} {/* Add a line break if it's not the last part */}
      </React.Fragment>
    ));

    return (    
        <div className='host'>
        <h4 className='hostname'>{hostNameElements}</h4>
        <img src={data.host.picture} alt="host" className='hostimage'/>
        </div>           
 
    );
};

export default Fichehost;