import React from 'react';

//Components
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
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Dashboard() {
    return (
        <Stack>
        <VStack
            w='100%'
            h={{
                base: '45vh',
                sm: '70vh',
                md: '75vh',
                lg: '90vh'
            }}
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
            w={{
                base: '90%',
                sm: '90%',
                md: '90%',
                lg: '90%'
            }}
            h={{
                base: '100vh',
                sm: '75vh',
                md: '85vh',
                lg: '90vh'
            }}
            align='right'
        >
            <Box 
                h={{
                    md: '10vh',
                    lg: '7vh'
                }}
                marginLeft={{
                    sm: '2vw',
                    md: '3vw',
                    lg: '5vw'
                }}
            >
            <Heading>The journey is real:</Heading>
            </Box>
            <Box
                h={{

                    lg: '25vh'
                }}
                w={{
                    md: '95vw',
                    lg: '95vw'
                }}
                align='right'
                lineHeight='tall'
            >
                <Text>hello again friends, I find myself entering the new era and decade with a even more determination that a <Heading as='h5' size='lg'>better world is possible.</Heading> I was fortunate enough to receive a world class education both inside and outside of the classroom that was full of breathtaking <Heading as='h6' size='sm'>adventure.</Heading> While I am still an agent for change always fighting for <Heading as='h5' size='md'>greater transparency and individual empowerment,</Heading> I took a long break from my communications and consulting role in climate to dive into full stack web development - which has led me down a very interesting rabbit hole. I am emerging from this epoch with my sharpest set of skills ever: <Heading as='h4' size='lg'>analysis, communications, programming,</Heading> and a wicked sense of humor to get through it all. I sincerely hope we get to work together at some point - <Heading as='h6' size='md'>and thank you for visiting!</Heading></Text>
            </Box>
        </VStack>
    </Stack>
    )
}

export default Dashboard