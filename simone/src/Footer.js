import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
                sm: '30vw',
                md: '18vw',
                lg: '14vw',
            }}
            marginLeft='3vw'
            marginTop='3.6vh'
        >
        <Text>simoneballard.com</Text>
        </Box>
        <ButtonGroup 
            spacing={{
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
        </Flex>
    )
}

export default Footer