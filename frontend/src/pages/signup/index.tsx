import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Capuano Pub | Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.title}>Capuano Pub</h1>

        <div className={styles.login}>
          <h2 className={styles.subtitle}>Faça seu cadastro</h2>
          <form>
            <Input placeholder="Nome" type="text" />
            <Input placeholder="Email" type="text" />

            <Input placeholder="Senha" type="password" />

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link className={styles.text} href="/">
            Já possui uma conta? Faça seu login!
          </Link>
        </div>
      </div>
    </>
  );
}
