import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>
        <Link to="/login" className={styles.cadastrar}>
          Entrar
        </Link>
        <Link to="/cadastro" className={styles.cadastrar}>
          Cadastrar
        </Link>
      </nav>
    </header>
  );
}
