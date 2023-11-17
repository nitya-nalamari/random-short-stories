import { Inter } from "next/font/google";

import MainPage from "../components/main-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ message }: any) {
  return (
    <>
      <MainPage data={message} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://127.0.0.1:1337/api/stories?populate[0]=genres&pagination[start]=0&pagination[limit]=4"
  );
  let data = "";
  await res.json().then((record: any) => {
    data = record.data;
  });

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      message: data,
      revalidate: 10,
    },
  };
}
