import React from "react";

import {Box, Center, Heading, Text, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react";

export default function Newsletter(){

    return(
    <Center>
    <Box bg="white" w="811px" h="229px" p={4} borderRadius="30">
        <Center>
            <Heading size="lg" paddingTop="20px" paddingBottom="10px" color="#FFFFFF">Be In The Know</Heading>
        </Center>
        <Center>
            <Text color="#B50000" paddingBottom="20px">Be notified when something new is added</Text>
        </Center>
       
        <InputGroup>
            <Input
            width="459.06px"
            placeholder='Email'
            borderRadius="30"
            />
            <InputRightElement width='7.5rem'>
                <Button borderRadius="30">Get Updates</Button>
            </InputRightElement>
        </InputGroup>
       
    </Box>
    </Center>
    );
}