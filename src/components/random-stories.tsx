import React from "react";

import {
  Heading,
  Card,
  CardBody,
  Grid,
  GridItem,
  Stack,
  Text,
  Image,
  Tag,
  TagLabel,
  HStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

export default function RandomStories() {
  const storyArray = [
    "/water.jpeg",
    "/sunny.jpeg",
    "/flowers.jpeg",
    "/underwater.jpeg",
  ];

  const randomStories = storyArray.map((record) => {
    return (
      <GridItem w="100%" style={{ perspective: "1000px" }}>
        <Card
          w="250px"
          h="395px"
          borderRadius="30"
          position="relative"
          as={motion.div}
          whileHover={{ rotateY: -180 }}
          transition="120ms"
          transitionTimingFunction="ease-in-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card
            position="absolute"
            w="250px"
            h="395px"
            borderRadius="30"
            boxShadow="dark-lg"
            cursor="pointer"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src={record}
              alt="water"
              borderTopLeftRadius="30"
              borderTopRightRadius="30"
              h="165px"
            />
            <CardBody>
              <Stack mt="2" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces.
                </Text>
                <HStack spacing={4}>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 1</TagLabel>
                  </Tag>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 2</TagLabel>
                  </Tag>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 3</TagLabel>
                  </Tag>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
          <Card
            position="absolute"
            w="250px"
            h="395px"
            borderRadius="30"
            boxShadow="dark-lg"
            cursor="pointer"
            transform="rotateY(-180deg)"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <CardBody>
              <Stack mt="2" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>Back of the card with story with description</Text>
                <HStack spacing={4}>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 1</TagLabel>
                  </Tag>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 2</TagLabel>
                  </Tag>
                  <Tag size="sm" variant="solid">
                    <TagLabel>Tag 3</TagLabel>
                  </Tag>
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </Card>
      </GridItem>
    );
  });
  return (
    <>
      <Heading
        as="h3"
        size="lg"
        color="#FFFFFF"
        style={{ paddingTop: "100px", paddingBottom: "30px" }}
      >
        Random
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={20} paddingBottom="50px">
        {randomStories}
      </Grid>
    </>
  );
}
