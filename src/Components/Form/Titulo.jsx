import React from "react";
import styles from "./Titulo.module.css";

export default function Titulo({ tipo, texto }) {
  switch (tipo) {
    case "h1":
      return <h1 className={styles.titulo}>{texto}</h1>;
    case "h2":
      return <h2 className={styles.titulo}>{texto}</h2>;
    case "h3":
      return <h3 className={styles.titulo}>{texto}</h3>;
    case "h4":
      return <h4 className={styles.titulo}>{texto}</h4>;
    case "h5":
      return <h5 className={styles.titulo}>{texto}</h5>;
    case "h6":
      return <h6 className={styles.titulo}>{texto}</h6>;
    case "p":
      return <p className={styles.titulo}>{texto}</p>;
  }
}
