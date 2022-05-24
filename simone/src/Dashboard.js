import React from 'react';

//Components
import Navigation from './Navigation';
// import BoxDemo from './common/Box';
import Profile from './assets/la.jpeg';
import Water from './assets/water.jpeg';
import Snow from './assets/snow.jpeg';
import Summer from './assets/summer.jpeg';
import Tree from './assets/tree.jpeg';

import {
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react';



function Dashboard() {
    return (
        <Stack>
            <Navigation 
            oneBtnTxt='S'
            oneBtnLink='/'
            twoBtnTxt='Credentials'
            twoBtnLink='/cv'
            threeBtnTxt='Words'
            threeBtnLink='/words'
            fourBtnTxt='Glitches'
            fourBtnLink='/glitches'
            fiveBtnTxt='>>>'
            fiveBtnLink='/contact'
            />
        <VStack
            w='100%'
            h='75vh'
        >
        <Grid templateColumns='repeat(5, 1fr)' gap={1.5}>
            <GridItem w='100%' h='10'>
               <Image src={Profile} alt='me' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Water} alt='water' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Snow} alt='snow' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Summer} alt='summer' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Tree} alt='tree' />
            </GridItem>
        </Grid>
        </VStack>
        <VStack
            w='100%'
            h='55vh'
        >
            <Box>
            <Heading>'The journey has been real...'</Heading>
            </Box>
            <Box>
                <Text>Over these years I have been on a journey into sustainable tech, software development, crypto, and the power of communication to motivate forces for change. This journey has taken me all over the states and world, and I have learned so much from each place, but more importantly I have learned that we are a global movement. With every stage of the journey I continue to leverage my skills and experience towards addressing some of the major societal challenges of today.</Text>
            </Box>
            <Box>
                <Text>I am constantly searching for interesting projects and people who are making waves in their respective fields. Ready to discuss how we can build something fascinating together.</Text>
            </Box>
        </VStack>

        </Stack>
    )
}

export default Dashboard