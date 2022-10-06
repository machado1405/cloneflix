import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../Components/Form/Input";
import Titulo from "../Components/Form/Titulo";
import Head from "../Helpers/Head";
import useForm from "../Hooks/useForm";
import styles from "./Login.module.css";

export default function Login() {
  const email = useForm("email");
  const senha = useForm();

  return (
    <section className="container animeLeft">
      <Head titulo="Login" />
      <div className={styles.form}>
        <Titulo tipo="h1" texto="Entrar" />
        <Titulo tipo="p" texto="Bem vindo(a) de volta!" />
        <form>
          <Input type="email" name="email" placeholder="Email" {...email} />
          <Input type="password" name="senha" placeholder="Senha" {...senha} />
          <Button>Entrar</Button>
        </form>
        <div className={styles.divCadastro}>
          <Titulo tipo="p" texto="Ainda não se cadastrou?" />
          <Link className={styles.cadastro} to="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </div>
    </section>
  );
}
