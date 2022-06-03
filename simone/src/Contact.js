import React from 'react'
import ContactForm from './ContactForm';

import {
    Box,
    Stack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Contact() {
    return (
        <Stack>
            <Box
                h={{
                    base: '65vh',
                    sm: '100vh'
                }}
                w={{
                    base: '65vw',
                    lg: '45vw'
                }}
                marginLeft={{
                    base: '15%',
                    lg: '27%'
                }}
                marginTop='10%'
            >
            <ContactForm
            />
            </Box>
        </Stack>
    )
}

export default Contact