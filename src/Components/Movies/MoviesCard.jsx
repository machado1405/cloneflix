import React from "react";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

export default function MoviesCard({ movie, showLink = true }) {
  return (
    <Link>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <p>{movie.title}</p>
    </Link>
  );
}
