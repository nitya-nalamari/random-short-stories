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

export default function FeaturedStories({ featuredStories }: any) {
  const storyArray = [
    "/water.jpeg",
    "/sunny.jpeg",
    "/flowers.jpeg",
    "/underwater.jpeg",
  ];

  const getTagInfo = (tags: any) => {
    const tagInfo = tags.map((genre: any) => {
      return (
        <Tag size="sm" variant="solid">
          <TagLabel>{genre.attributes.type}</TagLabel>
        </Tag>
      );
    });

    return tagInfo;
  };

  const featuredStoriesData = featuredStories.map((record: any) => {
    return (
      <GridItem w="100%" style={{ perspective: "1000px" }} key={record.id}>
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
              src={storyArray[2]}
              alt="water"
              borderTopLeftRadius="30"
              borderTopRightRadius="30"
              h="165px"
            />
            <CardBody>
              <Stack mt="2" spacing="3">
                <Heading size="md">{record.attributes.title}</Heading>
                <Text>{record.attributes.card_front_summary}</Text>
                <HStack spacing={4}>
                  {getTagInfo(record.attributes.genres.data)}
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
                <Heading size="md">{record.attributes.title}</Heading>
                <Text>{record.attributes.card_back_summary}</Text>
                <HStack spacing={4}>
                  {getTagInfo(record.attributes.genres.data)}
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
        Featured
      </Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={20}>
        {featuredStoriesData}
      </Grid>
    </>
  );
}
