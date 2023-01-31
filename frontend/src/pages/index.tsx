import { FormEvent, useContext } from "react";
import Head from "next/head";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "../styles/home.module.scss";
import Link from "next/link";

import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "pv@pv.com",
      password: "123",
    };

    await signIn(data);
  }
  return (
    <>
      <Head>
        <title>Capuano Pub | Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.title}>Capuano Pub</h1>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />

            <Button type="submit" loading={false}>
              Entrar
            </Button>
          </form>
          <Link className={styles.text} href="/signup">
            Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
