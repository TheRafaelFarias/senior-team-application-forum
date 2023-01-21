import { defaultTheme } from "@/config/theme";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junior Team Forums</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: defaultTheme.secondary }}>
        <h1>Teste</h1>
      </main>
    </>
  );
}
