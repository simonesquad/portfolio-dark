import React from 'react';
import Face from './assets/face.jpeg';

import {
    Box,
    Heading,
    Image,
    Text,
    Spacer,
    VStack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Vertical() {

    return(

        <VStack
                w='90%'
                h={{
                    base: '150vh',
                    sm: '160vh'
                }}
            >
            <Box
                marginLeft='7vw'
            >
                <Box
                    h={{
                        base: '25vh',
                        sm: '30vh'
                    }}
                    marginTop='3vh'
                >
                <Heading>Language is our key to all the worlds...</Heading>

                <Box>
                <Text>I realized early on in my studies and travels that how you communicate an idea is <Text as='b'>half the value of the idea itself.</Text> From working in environmental science during the 2010's, I learned that effecitively communicating the facts of climate change was no small task. <Text as='b'>Facts can easily get diluted or misconstrued in the general narrative behind alterior motives.</Text> None of us realized what a force social media would become for both the good and detriment of society. Coming of age in this era has shaped my approach towards every aspect of my work. Now I can see the good in rapidly communicating and connecting across the globe - especially being remote during a pandemic and needing to still gain information from the international coder community. <Text as='b'>Moving into the next decade I have thoroughly honed my writing style and feel confident in my expert level editing and curation abilities.</Text> While you can still find me on social media and writing articles here and there, I have shifted my focus to my personal projects towards narrative non-fiction stories. I hope you'll join me somewhere on the journey and if you'd like to work together on a project - feel free to reach out.</Text>
                </Box>
                <Spacer />

                <Box
                    h={{
                        sm: '20vh'
                    }}
                >
                <Heading as='h2' size='lg' >Your story is your legacy,
                </Heading> 
                <Heading as='h2' size='lg' >make it a good one.</Heading>
                </Box>

                <Box>
                <Image 
                src={Face} 
                alt='mural'
                h='50vh'
                w='25vw'
                borderRadius='50%'
                />
                </Box>
                </Box>
            </Box>
            </VStack>
    )
}

export default Vertical;