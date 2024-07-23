import React from 'react';
import Face from './assets/face.jpeg';

import {
    Box,
    Heading,
    Image,
    Text,
    Spacer,
    HStack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Horizontal() {

    return(

        <HStack
                w='90%'
                h={{
                    md: '140vh',
                    lg: '100vh'
                }}
            >
            <Box
                w='30vw'
                marginLeft={{
                    md: '5vw',
                    lg: '7vw'
                }}
            >
            <Image 
                src={Face} 
                alt='mural'
                h={{
                    md: '50vh',
                    lg: '55vh'
                }}
                w={{
                    md: '25vw',
                    lg: '20vw'
                }}
                borderRadius='50%'
                />
            </Box>

            <Spacer />

            <Box
                w={{
                    md: '55vw',
                    lg: '65vw'
                }}
            >
                <Box
                    h={{
                    md: '17vh',
                    lg: '15vh'
                }}
                >
                <Heading>Language is our key to all the worlds...</Heading>
                
                </Box>

                <Box
                    h={{
                    sm: '115vh',
                    md: '100vh',
                    lg: '90vh'
                    }}
                >
                <Text>I realized early on in my studies and travels that how you communicate an idea is <Text as='b'>half the value of the idea itself.</Text> From working in environmental science during the 2010's, I learned that effecitively communicating the facts of climate change was no small task. <Text as='b'>Facts can easily get diluted or misconstrued in the general narrative behind alterior motives.</Text> None of us realized what a force social media would become for both the good and detriment of society. Coming of age in this era has shaped my approach towards every aspect of my work. Now I can see the good in rapidly communicating and connecting across the globe - especially being remote during a pandemic and needing to still gain information from the international coder community. <Text as='b'>Moving into the next decade I have thoroughly honed my writing style and feel confident in my expert level editing and curation abilities.</Text> While you can still find me on social media and writing articles here and there, I have shifted my focus to my personal projects towards narrative non-fiction stories. I hope you'll join me somewhere on the journey and if you'd like to work together on a project - feel free to reach out.</Text>
                </Box>

            </Box>
            </HStack>
    )
}

export default Horizontal