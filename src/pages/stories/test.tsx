import React from "react";

export default function Page({ message }: any): JSX.Element {
  return <div>{message}</div>;
}

export async function getStaticProps() {
  //%pagination[start]=0&pagination[limit]=3
  const res = await fetch(
    "http://127.0.0.1:1337/api/stories?populate[0]=genres&pagination[start]=0&pagination[limit]=3"
  );
  let data = "";
  await res.json().then((record: any) => {
    data = JSON.stringify(record.data);
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
