import React from 'react';
import "../styles/components/fichetags.scss"
import Tag from './Tag';


const Fichetags = ({data}) => {
    const {tags} = data;

    return (
            <div className='tags'>
            {tags.map((tag, index) => (
                   <Tag key={index} tag={tag}/>
               ))}
            </div>
    );
};

export default Fichetags;