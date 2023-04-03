import React from "react";

import { Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import MenuItems from "./menu-items";


export default function Header(): JSX.Element{

  /*   return (
     <Grid templateAreas={`"header" "main" "be-in-the-know" "ad-space" "footer"`} bgImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.25)) , url('forest-path-at-night.jpg')" backgroundSize="cover" backgroundPosition="top">
     <GridItem area={'header'}>
         <Grid gap={4}>
             <GridItem > 
                <Heading as="h1" size="2xl" style={{paddingTop:"20px", paddingLeft: "60px"}} color="#FFFFFF">
                    <Link href="/">
                        Random<br/>Short<br/>Stories<br/>.com
                    </Link>
                </Heading>
             </GridItem>
             <GridItem  colEnd={6}>  
                 <MenuItems /> 
             </GridItem>
         </Grid>
     </GridItem>
     </Grid>
    ); */

    return (
        <Heading as="h1" size="2xl" style={{paddingTop:"20px", paddingLeft: "60px"}} color="#FFFFFF">
        <Link href="/">
            Random<br/>Short<br/>Stories<br/>.com
        </Link>
       </Heading>
    );
}