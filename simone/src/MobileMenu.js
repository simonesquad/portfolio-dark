import React from 'react';
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";

export default function MobileMenu () {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
        <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
                onOpen={onOpen}
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <Header 
                onOpen={onOpen}
                display={{ md: "none"}}
            >
            </Header>
        </Box>
    )
}