import React from 'react';
//Component
import Face from './assets/face.jpeg';

import {
    Box,
    Button,
    Heading,
    Image,
    Text,
    Spacer,
    Stack,
    HStack,
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

function Words() {

    return (
        <Stack>
            <VStack
            w='90%'
            h={{
                sm: '140vh',
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
                    sm: '23vh',
                    lg: '17vh'
                }}
            >
            <Heading as='h1' size='2xl'>"If" - by Rudyard Kipling</Heading>
            </Box>
            <Box
                h={{
                    sm: '45vh',
                    lg: '30vh'
                }}
                marginLeft='9vw'
            >
            <Heading as='h1' size='2xl' >If you can make one heap of all your winnings</Heading>
            <Heading as='h2' size='xl' >And risk it on one turn of pitch-and-toss,</Heading>
            <Heading as='h3' size='lg' >And lose, and start again at your beginnings</Heading>
            <Heading as='h4' size='md' >And never breathe a word about your loss;</Heading>
            </Box>
            <Box
                h={{
                    sm: '45vh',
                    lg: '30vh'
                }}
                marginLeft='13vw'
            >
            <Heading as='h3' size='lg' >If you can force your heart and nerve and sinew</Heading>
            <Heading as='h3' size='md' >To serve your turn long after they are gone,</Heading>   
            <Heading as='h3' size='lg' >And so hold on when there is nothing in you</Heading>
            <Heading as='h1' size='xl' >Except the Will which says to them: ‘Hold on!’</Heading>
            </Box>
            <Box
                h={{
                    sm: '50vh',
                    lg: '30vh'
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

            <HStack
                w='90%'
                h={{
                    sm: '200vh',
                    lg: '70vh'
                }}
            >
            <Box
                w='30vw'
                marginLeft='7vw'
            >
            <Image 
                src={Face} 
                alt='mural'
                h={{
                    sm: '30vh',
                    lg: '55vh'
                }}
                w={{
                    sm: '25vw',
                    lg: '20vw'
                }}
                borderRadius='50%'
                />
            </Box>
            <Spacer />
            <Box
                w='65vw'
            >
                <Box
                    h={{
                    sm: '20vh',
                    md: '15vh',
                    lg: '13vh'
                }}
                >
                <Heading>Language is our key to all the worlds...</Heading>
                
                </Box>

                <Box
                    h={{
                    sm: '115vh',
                    md: '75vh',
                    lg: '57vh'
                    }}
                >
                <Text>I realized early on in my studies and travels that how you communicate an idea is <Text as='b'>half the value of the idea itself.</Text> From working in environmental science during the 2010's, I learned that effecitively communicating the facts of climate change was no small task. <Text as='b'>Facts can easily get diluted or misconstrued in the general narrative behind alterior motives.</Text> None of us realized what a force social media would become for both the good and detriment of society. Coming of age in this era has shaped my approach towards every aspect of my work. Now I can see the good in rapidly communicating and connecting across the globe - especially being remote during a pandemic and needing to still gain information from the international coder community. <Text as='b'>Moving into the next decade I have thoroughly honed my writing style and feel confident in my expert level editing and curation abilities.</Text> While you can still find me on social media and writing articles here and there, I have shifted my focus to my personal projects towards narrative non-fiction stories. I hope you'll join me somewhere on the journey and if you'd like to work together on a project - feel free to reach out.</Text>
                </Box>

                <Box
                    h={{
                        sm: '17vh',
                        md: '12vh',
                        lg:'10vh'
                    }}
                >
                <Heading as='h2' size='lg' >Your story is your legacy,
                </Heading> 
                <Heading as='h2' size='lg' >make it a good one.</Heading>
                </Box>
            </Box>
            </HStack>
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
