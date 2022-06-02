import React from 'react'
import NLink from "./NLink";

import {
    Box,
    CloseButton,
    Flex,
} from "@chakra-ui/react";


  const LinkItems = [
      { label: "S", href: "/" },
      { label: "Credentials", href: "/cv" },
      { label: "Words", href: "/words" },
      { label: "Glitches", href: "/glitches" },
      { label: ">>>", href: "/contact" },
  ];

  export default function Sidebar({ onClose, ...rest }) {
      return (
        <Box
            transition="3s ease"
            borderRight="1px"
            borderRightColor="gray.200"
            w={{ base: "full" }}
            pos="fixed"
            h="full"
            {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton 
            display={{ base: "flex-end", md: "none" }} 
            onClick={onClose} 
        />
      </Flex>
        {LinkItems.map((link, i) => (
        <NLink key={i} link={link} onClick={onClose} />
      ))}
    </Box>
    );
  }