import React from "react";

import { GridItem } from "@chakra-ui/react";

import Stories from "./stories";

import Newsletter from "./news-letter";

import Layout from "./layout";

export default function MainPage(): JSX.Element {
  return (
    <Layout>
      <GridItem
        area={"main"}
        style={{
          paddingTop: "60px",
          paddingLeft: "250px",
          paddingBottom: "40px",
        }}
      >
        <Stories />
      </GridItem>
      <GridItem area={"be-in-the-know"} paddingBottom="80px">
        <Newsletter />
      </GridItem>
    </Layout>
  );
}
