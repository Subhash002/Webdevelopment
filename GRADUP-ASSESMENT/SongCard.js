import React from "react";
import { ReactPropTypes } from "react";
import Rating from "./Rating";

const SongCard = (props) => {
  const { thumb, title, artist, rating } = props.data;

  return (
    <div className="song-card">
      <div className="st-thumb">
        <img src={thumb} alt={title} />
      </div>
      <div className="details">
        <div className="song-title">{title}</div>
        <div className="artist">{artist}</div>
        <Rating {...rating} />
      </div>
    </div>
  );
};

SongCard.prototype = {
  data: ReactPropTypes.shape({
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default SongCard;
