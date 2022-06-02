import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh">
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
                onOpen={onOpen}
                display={{ md: "none"}}
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
            <Box ml={{ base: 0, md: 60 }} p="1">
                {children}
            </Box>  
        </Box>
    );
}