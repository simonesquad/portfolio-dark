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
        <Stack
            h='100vh'
            w='100%'
        >
            <Box
                w='50vw'
            >
            <ContactForm
            />
            </Box>
        </Stack>
    )
}

export default Contact