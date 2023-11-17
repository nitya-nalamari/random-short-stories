import React from "react";

import { Heading, Link } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Heading
      as="h1"
      size="2xl"
      style={{ paddingTop: "20px", paddingLeft: "60px" }}
      color="#FFFFFF"
    >
      <Link href="/">
        Random
        <br />
        Short
        <br />
        Stories
        <br />
        .com
      </Link>
    </Heading>
  );
}
