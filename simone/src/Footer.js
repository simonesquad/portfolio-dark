import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import {
    Box,
    ButtonGroup,
    IconButton,
    Flex,
    Text,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

const Footer = () => {
    return (
        <Flex
            h='10vh'
        >
        <Box
            w={{
                base: '45vw',
                sm: '35vw',
                md: '30vw',
                lg: '25vw',
            }}
            marginLeft='3.2vw'
            marginTop='3.6vh'
        >
        <Text>simoneballard.com</Text>
        </Box>

        <Box
            marginLeft='2.5vw'
        >
        <ButtonGroup 
            spacing={{
                base: '0',
                sm: '1',
                lg: '2'
            }}
            variant='ghost'
            marginTop='2vh'
            >
            <a rel="noreferrer" href="https://www.github.com/simonesquad" target="_blank">
            <IconButton 
            icon={ <GitHubIcon />}
            isRound='true'
            size='lg'
            alignSelf='flex-end'
            />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/simoneaballard" target="_blank">
            <IconButton 
            icon={ <LinkedInIcon />}
            isRound='true'
            size='lg'
            alignSelf='flex-end'
            />
            </a> 
        </ButtonGroup>
        </Box>
        </Flex>
    )
}

export default Footer;