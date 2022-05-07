import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal project</title>
        <meta name="description" content="It is my personal project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <h1 className="text-3xl font-bold underline mt-20 text-blue-400">Hello world!</h1>
      </main>
    </div>
  );
}
