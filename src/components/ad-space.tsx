import React from "react";
import {Grid, GridItem, Center} from "@chakra-ui/react";

export default function AdSpace(): JSX.Element {
    return (
   
    <Grid templateColumns="repeat(2, 1fr)">
         <Center>
        <GridItem bgColor="#FFFFFF" width="80%" h="200px">
            Ad Space 1
        </GridItem>
        </Center>
        <Center>
        <GridItem bgColor="#FFFFFF" width="80%" h="200px">
            Ad Space 2
        </GridItem>
        </Center>
    </Grid>
    );
}