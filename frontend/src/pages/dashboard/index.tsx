import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Capuano Bar | Painel </title>
      </Head>
      <Header></Header>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
