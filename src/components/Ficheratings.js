import React from 'react';
import StarFilled from '../assets/img/starfilled.svg';
import StarEmpty from '../assets/img/starempty.svg';
import "../styles/components/ficheratings.scss";

const Ficheratings = ({ rating }) => {
  return (
    <div className="rating-container">
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => {
          const isFilled = index < rating;
          return (
            <img
              key={index}
              src={isFilled ? StarFilled : StarEmpty}
              alt="star"
              className="star-icon"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ficheratings;