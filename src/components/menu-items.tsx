import React from "react";

import { Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/react";

export default function MenuItems(): JSX.Element{
    return (
    <Stack direction={["column", "row"]} spacing="32px" style={{paddingTop:"20px"}}>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}}>
                Genre
            </MenuButton>
            <MenuList bgColor="#7A7878" borderColor="#7A7878">
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>Mystery</MenuItem>
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>Horror</MenuItem>
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>Romance</MenuItem>
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>Cultural</MenuItem>
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>Thriller/Psychological</MenuItem>
                <MenuItem fontWeight="bold" bgColor="#7A7878" color="#FFFFFF" _hover={{bg: "#87AD69"}}>All</MenuItem>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton w="100px" style={{color: "#FFFFFF", fontWeight:"bold"}} onClick={()=>{console.log("Hello")}}>Merch</MenuButton>
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