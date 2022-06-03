import React from 'react'
import First from './assets/first.jpg'
import Sixth from './assets/sixth.jpg'
import Third from './assets/third.jpg'
import Fourth from './assets/fourth.jpg'
import Fifth from './assets/fifth.jpg'

import {
    Heading,
    HStack,
    Image,
    Grid,
    GridItem,
    Stack,
    VStack
} from '@chakra-ui/react';

function Glitches() {
    return (
        <Stack>     
            <HStack
                h='20vh'
                marginLeft='3vw'
            >
                <Heading>Are we ready for the next level?</Heading>
            </HStack>

            <VStack
            w='100%'
            h={{
                base: '75vh',
                sm: '100vh',
                md: '85vh',
                lg: '75vh'
            }}
            >
            <Grid templateColumns='repeat(5, 1fr)' gap={1.5}>
            <GridItem w='100%' h='10'>
               <Image src={First} alt='first' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Third} alt='second' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Fourth} alt='third' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Fifth} alt='fourth' />
            </GridItem>
            <GridItem w='100%' h='10'>
                <Image src={Sixth} alt='sixth' />
            </GridItem>
            </Grid>
            </VStack>
    </Stack>
    )
}

export default Glitches
