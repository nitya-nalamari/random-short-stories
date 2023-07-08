import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { Textarea, Text, Box, Button } from "@chakra-ui/react";
import Layout from "@/components/layout";

export default function Publish() {
  return (
    <Layout>
      <Box
        mb={24}
        width="75%"
        marginLeft="auto"
        marginRight="auto"
        display="block"
      >
        <GrammarlyEditorPlugin clientId="client_BEJ86LbsjHEYDpShg1iaH7">
          <Text mb="8px" color={"white"} fontWeight="bold" fontSize={24}>
            Title
          </Text>
          <Textarea
            placeholder="Enter the title of your story here"
            size="lg"
            color={"white"}
            width="100%"
            mb={4}
          />
          <Text mb="8px" color={"white"} fontWeight="bold" fontSize={24}>
            Body
          </Text>
          <Textarea
            placeholder="Enter the body of your story here"
            size="lg"
            color={"white"}
            mb={4}
            boxSize="lg"
            width="100%"
          />
          <Text mb="8px" color={"white"} fontWeight="bold" fontSize={24}>
            Summary to display on the front of the card
          </Text>
          <Textarea
            placeholder="Enter the title of your story here"
            size="lg"
            color={"white"}
            width="100%"
            mb={4}
          />
          <Text mb="8px" color={"white"} fontWeight="bold" fontSize={24}>
            Summary to display on the back of the card
          </Text>
          <Textarea
            placeholder="Enter the title of your story here"
            size="lg"
            color={"white"}
            width="100%"
            mb={4}
          />
        </GrammarlyEditorPlugin>
        <Button float="right">Publish</Button>
      </Box>
    </Layout>
  );
}
