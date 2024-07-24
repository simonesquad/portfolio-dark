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
                w='92%'
                h={{
                    base: '470vh',
                    sm: '350vh',
                    md: '300vh',
                    lg: '250vh'
                }}
            >
            <VStack
                w='100%'
                align='right'
            >
            <Box 
                marginLeft='7vw'
                marginTop='5vh'
            >
            <Box
                h={{
                    base: '15vh',
                    sm: '18vh',
                    md: '22vh',
                    lg: '27vh'
                }}
            >
            <Heading as='h1' size='2xl'>"If" - by Rudyard Kipling</Heading>
            </Box>
            <Box
                h={{
                    base: '75vh',
                    sm: '60vh',
                    md: '50vh',
                    lg: '45vh'
                }}
                marginLeft={{
                    md: '9vw',
                    lg: '9vw'
                }}
                marginTop={{
                    sm: '5vh'
                }}
            >
            <Heading as='h1' size='2xl' >If you can make one heap of all your winnings</Heading>
            <Heading as='h2' size='xl' >And risk it on one turn of pitch-and-toss,</Heading>
            <Heading as='h3' size='lg' >And lose, and start again at your beginnings</Heading>
            <Heading as='h4' size='md' >And never breathe a word about your loss;</Heading>
            </Box>
            <Box
                h={{
                    base: '75vh',
                    sm: '60vh',
                    md: '50vh',
                    lg: '45vh'
                }}
                marginLeft={{
                    md: '10vw',
                    lg: '13vw'
                }}
                marginTop={{
                    md: '5vh'
                }}
            >
            <Heading as='h3' size='lg' >If you can force your heart and nerve and sinew</Heading>
            <Heading as='h3' size='md' >To serve your turn long after they are gone,</Heading>   
            <Heading as='h3' size='lg' >And so hold on when there is nothing in you</Heading>
            <Heading as='h1' size='xl' >Except the Will which says to them: ‘Hold on!’</Heading>
            </Box>
            <Box
                h={{
                    base: '85vh',
                    sm: '80vh',
                    md: '85vh',
                    lg: '100vh'
                }}
                marginLeft={{
                    sm: '3vw',
                    md: '4vw'
                }}
                marginTop={{
                    sm: '4vh',
                    md: '5vh'
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
           

            <VStack
                w='100%'
            >
            {isMobile ? 
            <VStack>
                <Vertical />
            </VStack>
                :
                <VStack 
                    w='100%'
                    marginTop='10vh'
                >
                <Horizontal />
                </VStack>
            }

            <Box
                    h={{
                        base: '25vh',
                        sm: '24vh',
                        md: '22vh',
                        lg:'20vh'
                    }}
                >
                <Heading as='h2' size='lg' >Your story is your legacy,
                </Heading> 
                <Heading as='h2' size='lg' >make it a good one.</Heading>
                </Box>
            </VStack>

            <VStack
                w={{
                    base: '85%',
                    sm: '80%',
                    md: '65%',
                    lg: '60%'
                }}
            >
                <Box
                    h={{
                        base: '32vh',
                        sm: '35vh',
                        md: '37vh',
                        lg:'40vh'
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
        </VStack>

        </Stack>
    )
}

export default Words
