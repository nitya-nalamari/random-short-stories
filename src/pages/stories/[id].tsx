import React from "react";

import { Grid, GridItem, Text,Center, Heading, Tag, TagLabel, HStack } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MenuItems from "@/components/menu-items";
import AdSpace from "@/components/ad-space";

export default function Story(): JSX.Element{

    return (
        <Grid templateAreas={`"header" "main" "keywords" "ad-space" "footer"`} bgImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.25)) , url('/forest-path-at-night.jpg')" backgroundSize="cover" backgroundPosition="top">
            <GridItem area={'header'}>
                <Grid gap={4}>
                    <GridItem > 
                        <Header /> 
                    </GridItem>
                    <GridItem  colEnd={6}>  
                        <MenuItems /> 
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem area={'main'} style={{paddingTop:"60px", paddingLeft: "250px", paddingBottom: "40px"}}>
                <Grid templateRows="2">
                <GridItem>
                    
                        <Heading as="h2" color="#FFFFFF" paddingBottom="40px" paddingLeft="300px">
                            A walk in the forest
                        </Heading>
                    
                </GridItem>
                <GridItem>
                <Center width="1000px" paddingLeft="300px">
                <Text color="#FFFFFF" fontWeight="bold">
                His name is Cody.<br/>
                He lived with his mother Dorothy and his twin brother Andy.<br/>
                One day, they were moving in the forest when they happened upon a campground.<br/>
                “Ma!”  Andy exclaimed, looking toward a small tent and a car.<br/>
                Dorothy turned her head to the direction of the tent, smell of meat permeating the air.<br/>
                “Guys, stay back - let me do this”, Dorothy warned the kids.<br/>
                She carefully moved toward the tent, constantly sweeping the area for human presence.<br/> 
                The smell is definitely coming from the tent.  Smell growing stronger as she moved towards it.
                Dorothy and the kids hadn’t had food in days.<br/>
                As she tried to get at the tent, a hushed, tense voice suddenly pierced her ears. “Dad!!”<br/>
                Humans.<br/>
                Dorothy immediately turned to the direction of the voice.  A little human child, clinging to its father.<br/>
                I don’t have much time.<br/>
                Dorothy ripped into the tent with her claws.  On the floor of the tent was a shopping bag filled with red meat, smell so pungent Dorothy could not help but to drool.
                Jackpot, she thought.<br/>
                She quickly moved to the bag, grabbed the meat still inside packages.  As she ran out of the tent, she saw that the two humans she saw earlier had tucked themselves into the car, watching.
                That’s right, stay in there until we get away.<br/>
                “Andy!  Cody!  Let’s go!”<br/>
                They made out like thieves that day.<br/>
                Several years later, ma had long deceased, Andy somewhere in the neighborhood, probably.  Cody was moving in the forest not too far from the campground.  Any time he smelled campfire and meat, he’d reminisce about that day.

                </Text>
                </Center>
                </GridItem>
                </Grid>
            </GridItem>
            <GridItem area={'keywords'} paddingBottom="100px">
                <Center>
                <HStack spacing={4}>
                <Tag>
                    <TagLabel>
                        Funny
                    </TagLabel>
                </Tag>
                <Tag>
                    <TagLabel>
                        Humour
                    </TagLabel>
                </Tag>
                <Tag>
                    <TagLabel>
                        Horror
                    </TagLabel>
                </Tag>
                <Tag>
                    <TagLabel>
                        Other
                    </TagLabel>
                </Tag>
                </HStack>
                </Center>
            </GridItem>
            <GridItem area={'ad-space'} paddingBottom="60px">
                <AdSpace />
            </GridItem>
            <GridItem area={'footer'} paddingBottom="20px">
               <Footer />
            </GridItem>
        </Grid>
    );

}