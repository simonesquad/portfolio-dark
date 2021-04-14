import React from 'react'
import styled from 'styled-components';

//Components
import Navigation from './Navigation';
import ContactForm from './ContactForm';

const StyledContact = styled.div`
    background-color: black;
`

function Contact() {
    return (
        <StyledContact>
            <Navigation 
            oneBtnTxt='//'
            oneBtnLink='/'
            twoBtnTxt='CV//'
            twoBtnLink='/cv'
            threeBtnTxt='Words//'
            threeBtnLink='/words'
            fourBtnTxt='Glitches//'
            fourBtnLink='/glitches'
            />
            <ContactForm
            />
        </StyledContact>
    )
}

export default Contact