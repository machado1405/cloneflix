import React from "react";
import Button from "../components/Form/Button";
import Input from "../Components/Form/Input";
import Titulo from "../Components/Form/Titulo";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className="container animeLeft">
      <div className={styles.form}>
        <Titulo tipo="h1" texto="Entrar" />
        <Titulo tipo="p" texto="Bem vindo(a) de volta!" />
        <form>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="senha" placeholder="Senha" />
          <Button>Entrar</Button>
        </form>
      </div>
    </section>
  );
}
