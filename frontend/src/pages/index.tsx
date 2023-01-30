import Head from "next/head";
import Image from "next/image";
import logoImg from "../../public/beer.svg";
import { Input } from "../components/Input";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capuano Bar | Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1>Capuano Bar</h1>

        <div className={styles.login}>
          <form>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Senha" type="password" />
          </form>
        </div>
      </div>
    </>
  );
}
