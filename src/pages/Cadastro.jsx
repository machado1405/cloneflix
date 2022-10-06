import React from "react";
import Button from "../components/Form/Button";
import Input from "../Components/Form/Input";
import Titulo from "../Components/Form/Titulo";
import Head from "../Helpers/Head";
import useForm from "../Hooks/useForm";
import styles from "./Login.module.css";

export default function Cadastro() {
  const email = useForm("email");
  const senha = useForm();
  const nome = useForm();

  return (
    <section className="container animeLeft">
      <Head titulo="Cadastro" />
      <div className={styles.form}>
        <Titulo tipo="h1" texto="Cadastre-se" />
        <Titulo tipo="p" texto="Acompanhe os melhores filmes e séries!" />
        <form>
          <Input
            type="text"
            name="nome"
            placeholder="Nome completo"
            {...nome}
          />
          <Input type="email" name="email" placeholder="Email" {...email} />
          <Input type="password" name="senha" placeholder="Senha" {...senha} />
          <Button>Cadastrar</Button>
          <Titulo
            tipo="p"
            texto="Ao se cadastrar você concorda com os Termos e Condições e a Política de privacidade da CloneFlix."
          />
        </form>
      </div>
    </section>
  );
}
