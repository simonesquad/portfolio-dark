import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css' 

import {
    Box,
    ButtonGroup,
    IconButton,
    Flex,
    Text,
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex
            h='10vh'
        >
        <Box
            w='11vw'
            marginLeft='2vw'
            marginTop='3.6vh'
        >
        <Text>simoneballard.com</Text>
        </Box>
        <ButtonGroup 
            spacing='3'
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