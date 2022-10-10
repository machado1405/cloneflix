import React from "react";
import styles from "./Categorias.module.css";

export default function Categorias({ categorias }) {
  return (
    <ul className={styles.categoria}>
      {categorias &&
        categorias.map((item) => (
          <li className={styles.categorias} key={item.id}>
            {item.name}
          </li>
        ))}
    </ul>
  );
}
