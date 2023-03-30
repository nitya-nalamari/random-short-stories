import React from "react";

import { Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/react";

export default function MenuItems(): JSX.Element{
    return (
    <Stack direction={["column", "row"]} spacing="32px" style={{paddingTop:"20px"}}>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>
                Genre
            </MenuButton>
            <MenuList>
                <MenuItem fontWeight="bold">Mystery</MenuItem>
                <MenuItem fontWeight="bold">Horror</MenuItem>
                <MenuItem fontWeight="bold">Romance</MenuItem>
                <MenuItem fontWeight="bold">Cultural</MenuItem>
                <MenuItem fontWeight="bold">Thriller/Psychological</MenuItem>
                <MenuItem fontWeight="bold">All</MenuItem>
            </MenuList>
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