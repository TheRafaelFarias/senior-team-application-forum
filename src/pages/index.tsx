import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junior Team Forums</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Teste</h1>
      </main>
    </>
  );
}
