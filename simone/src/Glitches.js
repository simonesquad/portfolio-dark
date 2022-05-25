import React from 'react'
import myVideo from './assets/stripes.mov';
import './Glitches.css';

import {
    AspectRatio,
    Heading,
    HStack,
    Stack,
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
        
            <AspectRatio maxW='360px' ratio={1 / 2}>
            <video 
            width="420" height="440"
            controls autoPlay loop muted>
                <source src={myVideo} type="video/mp4">
                </source>
            </video>
            </AspectRatio>
        </Stack>
    )
}

export default Glitches
