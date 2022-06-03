import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
    ButtonGroup,
    Flex,
    Spacer,
    Box,
    IconButton,
    useColorMode,
} from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header({ onOpen, ...rest }) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
    <Flex
    //   px="4"
    //   display="flex"
    //   position="sticky"
    //   top="0"
    //   height="20"
    //   width="100%"
    //   zIndex="1"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    //   flexDirection="row"
    //   {...rest}
    >
    {/* <ButtonGroup
        spacing='0'
        marginTop='0.5vh'
    > */}
    <Box p='4'>
    <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Box>
    <Spacer />
    <Box p='3'>
        <IconButton 
            icon={ colorMode === 'light' ?  <FaMoon /> : <FaSun color='white' />}
            isRound='true'
            size='lg'
            alignSelf='flex-end'
            onClick={toggleColorMode}
        />
        </Box>
        {/* </ButtonGroup> */}
    </Flex>
    );
}