import React, { useState } from 'react';
import "../styles/components/carrousel.scss"


const Carrousel = ({data}) => {
  const { pictures } = data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
        <div>
            
        <div>        
            {pictures.length > 0 ? (
             <div>
                <div className="carousel-container">
            <button onClick={handlePrevClick} className="prevarrow"><img  src="../leftarrow.svg" alt="" /></button>
            <img src={pictures[currentImageIndex]}alt={`${currentImageIndex}`}  className="carousel-image"/>
              <div className="photo-counter">
                {currentImageIndex + 1}/{pictures.length}
              </div>
            <button onClick={handleNextClick}className="nextarrow"><img  src="../rightarrow.svg" alt="" /></button>
        </div>
            </div>
            ) :(
                <p>Item not found</p>
            )}
        </div>
       
        </div>
    );
};

export default Carrousel;