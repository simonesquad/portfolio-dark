import React from 'react'

import {
    Box,
    Heading,
    Text
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
    <Box w='100vw' h='70vh'>
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
            <Heading>Thank You for Your Message</Heading>
          </Box>
            <Text>I am wandering the world somewhere lost in code and words. But also I will get back to you shortly!</Text>
        </Box>
    </Box>
  )
}

export default Greeting