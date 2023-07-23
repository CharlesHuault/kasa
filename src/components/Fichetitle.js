import React from 'react';
import "../styles/components/fichetitle.scss"

const Fichetitle = ({data}) => {
    return (
        <div className='container'>
            <div className='title'>
                <h2>{data.title}</h2>
                <h4>{data.location}</h4>
            </div>
        </div>
    );
};

export default Fichetitle;