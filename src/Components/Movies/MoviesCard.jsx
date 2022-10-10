import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../Form/Titulo";
import styles from "./Movies.module.css";

const imageUrl = import.meta.env.VITE_IMG;

export default function MoviesCard({ movie, showLink = true }) {
  return (
    <Link to={`/catalogo/1/movie/${movie.id}`}>
      <img
        className={styles.cardImg}
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <Titulo tipo="p" texto={movie.title} />
    </Link>
  );
}
