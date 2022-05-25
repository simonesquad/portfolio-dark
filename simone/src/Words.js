import React from 'react';
import './Words.css'
//Components
import Button from './common/Button';
import TextBox from './common/TextBox';
import OnePic from './common/OnePic';
import Face from './assets/face.jpeg';

import {
    Box,
    Heading,
    Text,
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
            {/* <OnePic
            title=''
            desc='Communication is the key to opening all worlds...'
            mainimg={Face}
            quote='I realized early on in my studies and travels that how you communicate an idea is half the value of the idea itself. When I started my career in environmental science, effecitively communicating the facts of climate change was no small task. Since then social media has become a staple of almost every industry and missing the mark on a digital message can be disastrous. Moving into the next decade I have thoroughly honed my dominant writing style and feel confident in my expert level editing and curation abilities. The next phase should be interesting and I look forward to expanding the current repertoire.'
            /> */}
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
