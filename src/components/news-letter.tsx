import React from "react";

import {Box, Center, Heading, Text, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react";

export default function Newsletter(){

    return(
    <Center>
    <Box bgColor="#7A7878" w="811px" h="229px" p={4} borderRadius="30" style={{background: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.25))"}}>
        <Center>
            <Heading size="lg" paddingTop="20px" paddingBottom="10px" color="#FFFFFF">Be In The Know</Heading>
        </Center>
        <Center>
            <Text color="#FFFFFF" paddingBottom="20px">Be notified when something new is added</Text>
        </Center>
       <Center>
        <InputGroup width="459.06px">
            <Input
            placeholder='Email'
            borderRadius="30"
            color="#FFFFFF"
            />
            <InputRightElement width='7.5rem'>
                <Button borderRadius="30">Get Updates</Button>
            </InputRightElement>
        </InputGroup>
        </Center>
    </Box>
    </Center>
    );
}