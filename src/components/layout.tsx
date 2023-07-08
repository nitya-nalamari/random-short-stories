import React from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import Header from "./header";
import MenuItems from "./menu-items";
import AdSpace from "./ad-space";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Grid
        templateAreas={`"header" "children" "ad-space" "footer"`}
        bgImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.25)) , url('/forest-path-at-night.jpg')"
        backgroundSize="cover"
        backgroundPosition="top"
      >
        <Grid gap={4}>
          <GridItem>
            <Header />
          </GridItem>
          <GridItem colEnd={6}>
            <MenuItems />
          </GridItem>
        </Grid>
        <GridItem area={"children"}>{children}</GridItem>
        <GridItem area={"ad-space"} paddingBottom="60px">
          <AdSpace />
        </GridItem>
        <GridItem area={"footer"} paddingBottom="20px">
          <Footer />
        </GridItem>
      </Grid>
    </div>
  );
}
