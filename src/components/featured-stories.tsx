import React from "react";

import {Heading, Card, CardBody, Grid, GridItem, Stack, Text, Image} from "@chakra-ui/react";

export default function FeaturedStories(){
    return (
    <>
    <Heading as="h3" size="lg" color="#FFFFFF" style={{paddingTop: "100px", paddingBottom: "30px"}}>Featured</Heading> 
    <Grid templateColumns='repeat(5, 1fr)' gap={20}>
    <GridItem w='100%'> 
        <Card w="250px" h="395px" borderRadius="30" boxShadow="dark-lg" cursor="pointer">
            <Image src="/water.jpeg" alt="water" borderTopLeftRadius="30" borderTopRightRadius="30" h="165px"></Image>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </GridItem>
    <GridItem w='100%'>
        <Card w="250px" h="395px" borderRadius="30" boxShadow="dark-lg" cursor="pointer">
            <Image src="/sunny.jpeg" h="165px" alt="water" borderTopLeftRadius="30" borderTopRightRadius="30"></Image>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </GridItem>
    <GridItem w='100%'> 
    <Card w="250px" h="395px" borderRadius="30" boxShadow="dark-lg" cursor="pointer">
        <Image src="/flowers.jpeg" h="165px" alt="water" borderTopLeftRadius="30" borderTopRightRadius="30"></Image>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </GridItem>
    <GridItem w='100%'>
    <Card w="250px" h="395px" borderRadius="30" boxShadow="dark-lg" cursor="pointer">
        <Image src="/underwater.jpeg" h="165px" alt="water" borderTopLeftRadius="30" borderTopRightRadius="30"></Image>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    </GridItem>
  </Grid>
  </>
  )
}