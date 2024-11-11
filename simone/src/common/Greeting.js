import React from 'react'
import Peace from '../assets/fifth.jpg';

import {
    Box,
    Heading,
    Text,
    Image
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

const Greeting = () => {
  return (
    <Box w='100vw'>
        <Box 
          w={{
            sm: '79vw',
            lg: '50vw' 
          }}
          h='50vh'
          marginTop='15%'
          marginLeft='10%'
        >
          <Box h={{
            sm: '12vh',
            lg: '9vh'
          }}>
            <Heading>Thank You for Your Outreach ...</Heading>
          </Box>
            <Text>I will try and respond in a timely manner. In the meantime, feel free to connect in other corners of the metaverse, best Simone&</Text>
            </Box>
            <Image
              src={Peace}
            ></Image> 
    </Box>
  )
}

export default Greeting