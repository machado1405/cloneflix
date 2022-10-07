import React from "react";
import Titulo from "../Components/Form/Titulo";
import Movies from "../Components/Movies/Movies";
import styles from "./Catalogo.module.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Catalogo() {
  const [topMovies, setTopMovies] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);

  React.useEffect(() => {
    async function getTopRatedMovies(url) {
      const response = await fetch(url);
      const data = await response.json();
      setTopMovies(data.results);
    }

    async function getPopular(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPopularMovies(data.results);
    }

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    const popularUrl = `${moviesURL}popular?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    getPopular(popularUrl);
    console.log(topMovies);
  }, []);
  return (
    <section className="container animeLeft">
      <div className={styles.divSlide}>
        <Titulo tipo="h1" texto="Bem avaliados" />
        <Movies movie={topMovies} />
      </div>
      <div>
        <Titulo tipo="h1" texto="Mais populares" />
        <Movies movie={popularMovies} />
      </div>
    </section>
  );
}
