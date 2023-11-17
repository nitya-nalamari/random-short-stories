import React from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  Spinner,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function MenuItems(): JSX.Element {
  const router = useRouter();

  const { user, error, isLoading } = useUser();

  console.log({ user: user });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>Error during login!</Text>;
  }

  return (
    <Stack
      direction={["column", "row"]}
      spacing="32px"
      style={{ paddingTop: "20px" }}
    >
      <Menu>
        <MenuButton
          w="100px"
          style={{ color: "#FFFFFF", fontWeight: "bold" }}
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton w="100px" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Genre
        </MenuButton>
        <MenuList bgColor="#7A7878" borderColor="#7A7878">
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            Mystery
          </MenuItem>
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            Horror
          </MenuItem>
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            Romance
          </MenuItem>
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            Cultural
          </MenuItem>
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            Thriller/Psychological
          </MenuItem>
          <MenuItem
            fontWeight="bold"
            bgColor="#7A7878"
            color="#FFFFFF"
            _hover={{ bg: "#87AD69" }}
          >
            All
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          w="100px"
          style={{ color: "#FFFFFF", fontWeight: "bold" }}
          onClick={() => {
            console.log("Hello");
          }}
        >
          Merch
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton
          w="100px"
          style={{ color: "#FFFFFF", fontWeight: "bold" }}
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton w="100px" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Support
        </MenuButton>
      </Menu>
      <Menu>
        <MenuButton w="100px" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Contact Us
        </MenuButton>
      </Menu>
      {!user && (
        <Menu>
          <MenuButton
            w="100px"
            style={{ color: "#FFFFFF", fontWeight: "bold" }}
            onClick={() => {
              router.push("/api/auth/login");
            }}
          >
            Login
          </MenuButton>
        </Menu>
      )}
      {user && (
        <Menu>
          <MenuButton
            w="100px"
            style={{ color: "#FFFFFF", fontWeight: "bold" }}
            onClick={() => {
              router.push("/api/auth/logout");
            }}
          >
            Logout
          </MenuButton>
        </Menu>
      )}
    </Stack>
  );
}
