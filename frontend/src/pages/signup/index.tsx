import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState, FormEvent, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Signup() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Capuano Pub | Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <h1 className={styles.title}>Capuano Pub</h1>

        <div className={styles.login}>
          <h2 className={styles.subtitle}>Faça seu cadastro</h2>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
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
