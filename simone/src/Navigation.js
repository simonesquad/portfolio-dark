import React from 'react';
import ButtonLinks from './common/Button';

import { 
    Flex,
    Button,
    ButtonGroup
} from '@chakra-ui/react';

const Navigation = ({ oneBtnTxt, oneBtnLink, twoBtnTxt, twoBtnLink, threeBtnTxt, threeBtnLink, fourBtnTxt, fourBtnLink, fiveBtnTxt, fiveBtnLink }) => {
    return (
        <Flex 
            color='black'
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
        </Flex>
    )
}

export default Navigation