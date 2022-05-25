import React from 'react';
import './Words.css'
//Component
import Face from './assets/face.jpeg';

import {
    Box,
    Heading,
    Image,
    Text,
    Spacer,
    Stack,
    HStack,
    VStack
} from '@chakra-ui/react';

function Words() {

    return (
        <Stack>
            <VStack
            w='90%'
            h='130vh'
            align='right'
            >
            <Box 
                marginLeft='7vw'
                marginTop='5vh'
            >
            <Box
                h='17vh'
            >
            <Heading as='h1' size='2xl' noOfLines={1}>"If" - by Rudyard Kipling</Heading>
            </Box>
            <Box
                h='30vh'
                marginLeft='9vw'
            >
            <Heading as='h1' size='2xl' noOfLines={1}>If you can make one heap of all your winnings</Heading>
            <Heading as='h2' size='xl' noOfLines={1}>And risk it on one turn of pitch-and-toss,</Heading>
            <Heading as='h3' size='lg' noOfLines={1}>And lose, and start again at your beginnings</Heading>
            <Heading as='h4' size='md' noOfLines={1}>And never breathe a word about your loss;</Heading>
            </Box>
            <Box
                h='30vh'
                marginLeft='13vw'
            >
            <Heading as='h3' size='lg' noOfLines={1}>If you can force your heart and nerve and sinew</Heading>
            <Heading as='h3' size='md' noOfLines={1}>To serve your turn long after they are gone,</Heading>   
            <Heading as='h3' size='lg' noOfLines={1}>And so hold on when there is nothing in you</Heading>
            <Heading as='h1' size='xl' noOfLines={1}>Except the Will which says to them: ‘Hold on!’</Heading>
            </Box>
            <Box
                h='30vh'
            >
            <Heading as='h3' size='lg' noOfLines={1}>If you can talk with crowds and keep your virtue,</Heading>   
            <Heading as='h3' size='md' noOfLines={1}>Or walk with Kings—nor lose the common touch,</Heading>
            <Heading as='h3' size='md' noOfLines={1}>If neither foes nor loving friends can hurt you,</Heading>
            <Heading as='h3' size='md' noOfLines={1}>If all men count with you, but none too much;</Heading>
            <Heading as='h3' size='lg' noOfLines={1}>If you can fill the unforgiving minute</Heading>
            <Heading as='h2' size='lg' noOfLines={1}>With sixty seconds’ worth of distance run,</Heading>   
            <Heading as='h1' size='2xl' noOfLines={1}>Yours is the Earth and everything that’s in it,</Heading>   
            <Heading as='h3' size='lg' noOfLines={1}>And—which is more—you’ll be a Man, my son!"</Heading> 
            </Box>
            </Box>
            </VStack>

            <HStack
                w='90%'
                h='70vh'
            >
            <Box
                w='30vw'
                marginLeft='7vw'
            >
            <Image 
                src={Face} 
                alt='mural'
                h='55vh'
                w='20vw'
                borderRadius='50%'
                />
            </Box>
            <Spacer />
            <Box
                w='65vw'
            >
                <Box
                    h='10vh'
                >
                <Heading>Language is our key to all the worlds...</Heading>
                
                </Box>

                <Box
                    h='40vh'
                >
                <Text>I realized early on in my studies and travels that how you communicate an idea is <Text as='b'>half the value of the idea itself.</Text> From working in environmental science during the 2010's, I learned that effecitively communicating the facts of climate change was no small task. <Text as='b'>Facts can easily get diluted or misconstrued in the general narrative behind alterior motives.</Text> None of us realized what a force social media would become for both the good and detriment of society. Coming of age in this era has shaped my approach towards every aspect of my work. Now I can see the good in rapidly communicating and connecting across the globe - especially being remote during a pandemic and needing to still gain information from the international coder community. <Text as='b'>Moving into the next decade I have thoroughly honed my writing style and feel confident in my expert level editing and curation abilities.</Text> While you can still find me on social media and writing articles here and there, I have shifted my focus to my personal projects towards narrative non-fiction stories. I hope you'll join me somewhere on the journey and if you'd like to work together on a project - feel free to reach out.</Text>
                </Box>

                <Box
                    h='10vh'
                >
                <Heading as='h2' size='lg' noOfLines={1}>Your story is your legacy,
                </Heading> 
                <Heading as='h2' size='lg' noOfLines={1}>make it a good one.</Heading>
                </Box>
            </Box>
            </HStack>
    
             {/* <div className="medium__button">
                <Button 
                text='Click Bait'
                link="https://medium.com/@simone-a-ballard" rel="noreferrer" target = "_blank"
                />
            </div> */}
        </Stack>
    )
}

export default Words
