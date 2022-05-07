import Head from "next/head";

const cards = [
  {
    id: 1,
    title: "Hello world!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Hello world!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Hello world!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Hello world!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal project</title>
        <meta name="description" content="It is my personal project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto p-5 md:p-10 flex justify-center items-center flex-wrap gap-10 max-w-5xl">
        {cards.map(({ id, title, description }) => (
          <div
            key={id}
            className="shadow-lg rounded-lg p-8 bg-white text-center border hover:bg-gray-50 hover:shadow-2xl select-none max-w-sm w-full"
          >
            <h1 className="text-3xl font-bold text-blue-400">{title}</h1>
            <p className="text-base mt-5">{description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
