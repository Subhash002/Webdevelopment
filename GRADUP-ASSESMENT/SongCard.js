import React from "react";
import { ReactPropTypes } from "react";
import Rating from "./Rating";

const SongCard = (props) => {
  const { thumb, title, artist, rating } = props.data;

  return (
    <div className="song-card">
      <img src={thumb} alt={title} />
      <div className="song-title">
        {title} by {artist}
      </div>
      <Rating stars={rating} />
    </div>
  );
};

// SongCard.prototype = {
//   data: ReactPropTypes.shape({
//     thumb: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     artist: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//   }),
// };

export default SongCard;
