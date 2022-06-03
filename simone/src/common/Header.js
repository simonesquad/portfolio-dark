import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
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
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    >
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
    </Flex>
    );
}