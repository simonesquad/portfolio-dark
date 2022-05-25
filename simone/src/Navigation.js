import React from 'react';
import ButtonLinks from './common/Button';

import { 
    Flex,
    Box,
    Button,
    ButtonGroup,
    IconButton,
    useColorMode,
    Spacer
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navigation = ({ oneBtnTxt, oneBtnLink, twoBtnTxt, twoBtnLink, threeBtnTxt, threeBtnLink, fourBtnTxt, fourBtnLink, fiveBtnTxt, fiveBtnLink }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex 
            h='10vh'
            >
        <ButtonGroup 
            spacing='8'
            variant='ghost'
            marginTop='2vh'
            >
            <Button>
                <ButtonLinks 
                    text={oneBtnTxt} 
                    link={oneBtnLink} 
                />
            </Button>
            <Button>
                <ButtonLinks 
                    text={twoBtnTxt} 
                    link={twoBtnLink} 
                />
            </Button>
            <a rel="noreferrer" href="https://www.github.com/simonesquad" target="_blank">
            <Button>
                Github
            </Button>
            </a>
            <Button>
                <ButtonLinks 
                    text={threeBtnTxt} 
                    link={threeBtnLink} 
                />
            </Button>
            <Button>
                <ButtonLinks 
                    text={fourBtnTxt} 
                    link={fourBtnLink} 
                />
            </Button>
            <Button>
                <ButtonLinks 
                    text={fiveBtnTxt} 
                    link={fiveBtnLink} 
                />
            </Button>
        </ButtonGroup>
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
    )
}

export default Navigation