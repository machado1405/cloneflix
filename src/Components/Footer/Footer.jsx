import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <Link to="/">Início</Link>
      <Link to="/cadastro">Cadastrar</Link>
      <Link to="/">Termos e Condições </Link>
      <Link to="/">Política de Privacidade</Link>
      <Link to="/">Ajuda</Link>
      <div className={styles.icons}>
        <Link to="/">
          <FaFacebookF />
        </Link>
        <Link to="/">
          <FaTwitter />
        </Link>
        <Link to="/">
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
}
