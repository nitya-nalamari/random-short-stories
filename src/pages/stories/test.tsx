import React from "react";

export default function Page({ message }: any): JSX.Element {
  return <div>{message}</div>;
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:1337/api/admin-writers");
  let data = "";
  await res.json().then((record: any) => {
    data = record.data[0].attributes.first_name;
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
