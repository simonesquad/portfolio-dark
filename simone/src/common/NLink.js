import React from 'react'
import { NavLink } from 'react-router-dom';

import {
    Flex,
    Text
} from "@chakra-ui/react";

export default function NLink({ link, ...rest }) {
    const { label, href } = link;

    return (
        <div>
        <NavLink to={href} passHref>
            <a>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: "gray.200",
                        color: "black",
                        fontWeight: "bold",
                        textDecoration: "none"
                    }}
                    {...rest}
                >
                    <Text fontSize="1.2rem">{label}</Text>
                </Flex>
            </a>
        </NavLink>
        </div>
    );
}