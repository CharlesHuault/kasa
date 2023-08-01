import React from 'react';
import "../styles/components/tag.scss"


const Tag = ({tag}) => {
    return (
        <div className='tag'>
            {tag}
        </div>
    );
};

export default Tag;