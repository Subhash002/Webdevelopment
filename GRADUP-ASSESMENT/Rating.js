import React from "react";
const Rating = (props) => {
  const stars = props.stars;
  return (
    <div className="rating">
      {[...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(() => (
        <div className="star" />
      ))}
    </div>
  );
};

export default Rating;
