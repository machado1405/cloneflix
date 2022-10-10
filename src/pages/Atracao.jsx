import React from "react";
import { useParams } from "react-router-dom";
import Button from "../Components/Form/Button";
import Loading from "../Helpers/Loading";
import Categorias from "../Components/Form/Categorias";
import Titulo from "../Components/Form/Titulo";
import styles from "./Atracao.module.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

export default function Atracao() {
  const [info, setInfo] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    async function getInfo(url) {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    }
    const infoUrl = `${moviesURL}${id}?${apiKey}`;
    getInfo(infoUrl);
  }, []);

  return (
    <section className={`container animeLeft ${styles.sectionAtracao}`}>
      <div className={styles.divImg}>
        <img src={imageUrl + info.poster_path} alt="" />
        <Button>Assistir Trailer</Button>
      </div>
      <div>
        <div className={styles.divTitulo}>
          <Titulo tipo="h1" texto={info.title} />
          <Titulo tipo="p" texto={`Ano: ${info.release_date}`} />
          <Titulo tipo="p" texto={`Duração: ${info.runtime} min`} />
          <Categorias categorias={info.genres} />
        </div>
        <div className={styles.sinopse}>
          <Titulo tipo="h1" texto="Sinopse" />
          <Titulo tipo="p" texto={info.overview} />
          <Titulo
            tipo="p"
            texto={`Média das avaliações: ${info.vote_average}`}
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}
