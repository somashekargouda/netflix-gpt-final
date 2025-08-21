import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    // <div className="w-64 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
    <div className="w-48 pr-4">
      <img alt="card_image" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
