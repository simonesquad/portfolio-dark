import React from 'react'

import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';

const Greeting = () => {
  return (
    <Box w='100vw' h='70vh'>
        <Box 
          w='50vw' 
          h='50vh'
          marginTop='15%'
          marginLeft='10%'
        >
          <Box h='9vh'>
            <Heading>Thank You for Your Message</Heading>
          </Box>
            <Text>I am wandering the world somewhere lost in code and words. But also I will get back to you shortly!</Text>
        </Box>
    </Box>
  )
}

export default Greeting