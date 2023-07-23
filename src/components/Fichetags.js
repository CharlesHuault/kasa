import React from 'react';
import "../styles/components/fichetags.scss"



const Fichetags = ({data}) => {
    const {tags} = data;

    return (
            <div className='tags'>
                <ul>
                {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
                ))}
                </ul>
            </div>
    );
};

export default Fichetags;