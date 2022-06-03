import Navigation from "../Navigation";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";

import {
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery('(max-width: 600px)')

    return (
        <div>
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

            <Footer />
        </div>
    );
}