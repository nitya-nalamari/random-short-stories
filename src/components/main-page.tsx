import React from "react";

import { Grid, GridItem } from '@chakra-ui/react';

import Header from "../components/header";
import MenuItems from "./menu-items";
import Stories from "./stories";
import Footer from "./footer";
import Newsletter from "./news-letter";
import AdSpace from "./ad-space";

export default function MainPage(): JSX.Element{

    return (
        <Grid templateAreas={`"header" "main" "be-in-the-know" "ad-space" "footer"`} bgImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.25)) , url('forest-path-at-night.jpg')" backgroundSize="cover" backgroundPosition="top">
            <GridItem area={'header'}>
                <Grid gap={4}>
                    <GridItem > 
                        <Header /> 
                    </GridItem>
                    <GridItem  colEnd={6}>  
                        <MenuItems /> 
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem area={'main'} style={{paddingTop:"60px", paddingLeft: "250px", paddingBottom: "40px"}}>
                <Stories />
            </GridItem>
            <GridItem area={'be-in-the-know'} paddingBottom="80px">
                <Newsletter />
            </GridItem>
            <GridItem area={'ad-space'} paddingBottom="60px">
                <AdSpace />
            </GridItem>
            <GridItem area={'footer'} paddingBottom="20px">
               <Footer />
            </GridItem>
        </Grid>
    );
}