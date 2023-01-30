import Head from "next/head";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capuano Bar | Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.title}>Capuano Bar</h1>

        <div className={styles.login}>
          <form>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />

            <Button type="submit" loading={false}>
              Entrar
            </Button>
          </form>

          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  );
}
