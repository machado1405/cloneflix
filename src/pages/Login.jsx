import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../Components/Form/Input";
import Titulo from "../Components/Form/Titulo";
import Head from "../Helpers/Head";
import useForm from "../Hooks/useForm";
import { UserContext } from "../UserContext";
import Error from "../Helpers/Error";
import styles from "./Login.module.css";

export default function Login() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="container animeLeft">
      <Head titulo="Login" />
      <div className={styles.form}>
        <Titulo tipo="h1" texto="Entrar" />
        <Titulo tipo="p" texto="Bem vindo(a) de volta!" />
        <form onSubmit={handleSubmit}>
          <Input type="text" name="email" placeholder="Email" {...username} />
          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            {...password}
          />
          {loading ? (
            <Button disabled>Entrando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error error={error && "Dados incorretos."} />
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
