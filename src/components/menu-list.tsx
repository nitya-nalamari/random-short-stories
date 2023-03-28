import React from "react";

import { Menu, MenuButton, Stack } from "@chakra-ui/react";

export default function MenuList(): JSX.Element{
    return (
    <Stack direction={["column", "row"]} spacing="32px" style={{paddingTop:"20px"}}>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>Genre</MenuButton>
        </Menu>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>Merch</MenuButton>
        </Menu>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>About</MenuButton>
        </Menu>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>Support</MenuButton>
        </Menu>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>Contact Us</MenuButton>
        </Menu>
    </Stack>
  );
}