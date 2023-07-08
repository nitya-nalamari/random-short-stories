import React from "react";

import {
  Grid,
  GridItem,
  Heading,
  IconButton,
  Icon,
  Link,
  Text,
  Center,
} from "@chakra-ui/react";

import {
  SiLinkedin,
  SiMessenger,
  SiTwitter,
  SiInstagram,
} from "react-icons/si";
import PrivacyPolicy from "./privacy-policy";
import TermsOfUse from "./terms-of-use";

export default function Footer(): JSX.Element {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem paddingLeft="100px">
          <Link color="#FFFFFF" href="/">
            <Heading size="md">
              Random
              <br />
              Short
              <br />
              Stories
              <br />
              .com
            </Heading>
          </Link>
        </GridItem>
        <GridItem>
          <Link color="#FFFFFF">Merch</Link>
          <br />
          <Link color="#FFFFFF" href="/about">
            About
          </Link>
          <br />
          <Link color="#FFFFFF">Support</Link>
        </GridItem>
        <GridItem>
          <TermsOfUse />
          <br />
          <PrivacyPolicy />
        </GridItem>
        <GridItem>
          <Heading color="#FFFFFF" fontSize="2xl" paddingBottom="5px">
            Connect with Us
          </Heading>
          <Grid templateColumns="repeat(8, 1fr)">
            <IconButton
              aria-label="social-linkedin"
              size="sm"
              icon={<Icon as={SiLinkedin} />}
              variant="solid"
              width="10px"
            ></IconButton>

            <IconButton
              aria-label="social-instagram"
              size="sm"
              icon={<Icon as={SiInstagram} />}
              variant="solid"
              width="10px"
            ></IconButton>

            <IconButton
              aria-label="social-twitter"
              size="sm"
              icon={<Icon as={SiTwitter} />}
              variant="solid"
              width="10px"
            ></IconButton>

            <IconButton
              aria-label="social-messenger"
              size="sm"
              icon={<Icon as={SiMessenger} />}
              variant="solid"
              width="10px"
            ></IconButton>
          </Grid>
        </GridItem>
      </Grid>
      <Center>
        <Text color="#FFFFFF">copyright (c) 2023 randomshortstories.com </Text>
      </Center>
    </>
  );
}
