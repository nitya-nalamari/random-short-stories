import Layout from "@/components/layout";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Layout>
      <Box
        mb={24}
        width="40%"
        marginLeft="auto"
        marginRight="auto"
        display="block"
      >
        <Text color="white">This is an about page for us</Text>
      </Box>
    </Layout>
  );
}
