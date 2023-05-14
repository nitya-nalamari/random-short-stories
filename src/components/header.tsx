import React from "react";

import { Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import MenuItems from "./menu-items";


export default function Header(): JSX.Element{

    return (
        <Heading as="h1" size="2xl" style={{paddingTop:"20px", paddingLeft: "60px"}} color="#FFFFFF">
        <Link href="/">
            Random<br/>Short<br/>Stories<br/>.com
        </Link>
       </Heading>
    );
}