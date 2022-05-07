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
        <div className="mt-20 drop-shadow-lg rounded-lg w-96 p-8 bg-white text-center hover:bg-gray-50 select-none">
          <h1 className="text-3xl font-bold text-blue-400">Hello world!</h1>
          <p className="text-base mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. 
          </p>
        </div>
      </main>
    </div>
  );
}
