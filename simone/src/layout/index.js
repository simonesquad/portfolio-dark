import Navigation from "../Navigation";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";

import {
    Box,
    useMediaQuery,
} from "@chakra-ui/react";

export default function Layout({ children }) {
    
    const [isMobile] = useMediaQuery('(max-width: 600px)')

    return (
        <Box minH="100vh">
            {isMobile ? 
            
            <MobileMenu />

            : 

            <Navigation 
            oneBtnTxt='S'
            oneBtnLink='/'
            twoBtnTxt='Credentials'
            twoBtnLink='/cv'
            threeBtnTxt='Words'
            threeBtnLink='/words'
            fourBtnTxt='Glitches'
            fourBtnLink='/glitches'
            fiveBtnTxt='>>>'
            fiveBtnLink='/contact'
            />}
            <Box ml={{ base: 0, md: 0 }} p="1">
                {children}
            </Box>  
            <Footer />
        </Box>
    );
}