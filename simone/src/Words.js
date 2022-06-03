import React from 'react';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

import {
    Box,
    Button,
    Heading,
    Stack,
    VStack,
    useMediaQuery
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Words() {
    const [isMobile] = useMediaQuery('(max-width: 828px)')

    return (
        <Stack>
            <VStack
            w='90%'
            h={{
                md: '140vh',
                lg: '130vh'
            }}
            align='right'
            >
            <Box 
                marginLeft='7vw'
                marginTop='5vh'
            >
            <Box
                h={{
                    md: '20vh',
                    lg: '17vh'
                }}
            >
            <Heading as='h1' size='2xl'>"If" - by Rudyard Kipling</Heading>
            </Box>
            <Box
                h={{
                    md: '40vh',
                    lg: '30vh'
                }}
                marginLeft={{
                    md: '9vw',
                    lg: '9vw'
                }}
                marginTop={{
                    sm: '2vh'
                }}
            >
            <Heading as='h1' size='2xl' >If you can make one heap of all your winnings</Heading>
            <Heading as='h2' size='xl' >And risk it on one turn of pitch-and-toss,</Heading>
            <Heading as='h3' size='lg' >And lose, and start again at your beginnings</Heading>
            <Heading as='h4' size='md' >And never breathe a word about your loss;</Heading>
            </Box>
            <Box
                h={{
                    md: '40vh',
                    lg: '30vh'
                }}
                marginLeft={{
                    md: '10vw',
                    lg: '13vw'
                }}
                marginTop={{
                    md: '1vh'
                }}
            >
            <Heading as='h3' size='lg' >If you can force your heart and nerve and sinew</Heading>
            <Heading as='h3' size='md' >To serve your turn long after they are gone,</Heading>   
            <Heading as='h3' size='lg' >And so hold on when there is nothing in you</Heading>
            <Heading as='h1' size='xl' >Except the Will which says to them: ‘Hold on!’</Heading>
            </Box>
            <Box
                h={{
                    md: '50vh',
                    lg: '30vh'
                }}
                marginLeft={{
                    sm: '3vw',
                }}
                marginTop={{
                    sm: '1vh'
                }}
            >
            <Heading as='h3' size='lg' >If you can talk with crowds and keep your virtue,</Heading>   
            <Heading as='h3' size='md' >Or walk with Kings—nor lose the common touch,</Heading>
            <Heading as='h3' size='md' >If neither foes nor loving friends can hurt you,</Heading>
            <Heading as='h3' size='md' >If all men count with you, but none too much;</Heading>
            <Heading as='h3' size='lg' >If you can fill the unforgiving minute</Heading>
            <Heading as='h2' size='lg' >With sixty seconds’ worth of distance run,</Heading>   
            <Heading as='h1' size='2xl' >Yours is the Earth and everything that’s in it,</Heading>   
            <Heading as='h3' size='lg' >And—which is more—you’ll be a Man, my son!"</Heading> 
            </Box>
            </Box>
            </VStack>

            {isMobile ? 
            <Vertical />
            :
            <Horizontal />
            }

            <VStack
                h='40vh'
                w={{
                    sm: '90%',
                    lg: '50%'
                }}
            >
                <Box
                    h={{
                        md: '40vh',
                        lg:'30vh'
                    }}
                    marginLeft='7vw'
                    marginTop='10vh'
                >
                <Heading as='h5' size='md'>If you'd like to read some more of my musings on various topics [including crypto], check out my:</Heading> 
                <Box
                    marginTop='3vh'
                >
                <a rel="noreferrer" href="https://simone-a-ballard.medium.com/" target="_blank">
                <Button>Medium.</Button>
                </a>
                </Box>
                </Box>
            </VStack>
        </Stack>
    )
}

export default Words
