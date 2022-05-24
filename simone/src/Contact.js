import React from 'react'
import styled from 'styled-components';

//Components
import ContactForm from './ContactForm';

const StyledContact = styled.div`
    background-color: black;
`

function Contact() {
    return (
        <StyledContact>
            <ContactForm
            />
        </StyledContact>
    )
}

export default Contact