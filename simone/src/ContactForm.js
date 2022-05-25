import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";
import './styles/ContactForm.css';

import {
    Box,
    Stack,
    VStack,
} from '@chakra-ui/react';

const ContactForm = () => {
    const form = useRef();
    const history = useHistory();

    const handleRoute = () => {
        history.push("/thankyou")
      }
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_jqkz3qr', 
          'template_kqymnmk', 
          form.current, 
          'user_jMWnlaeLAc6VuXUX6i7eh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
    <Stack>
        <VStack
            h='100vh'
            w='100%'
            align='center'
        >
        <form ref={form} onSubmit={sendEmail}>
        <div className="contents">
            <div>
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            name="user_name"
            required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            name="user_email"
            required 
            />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea 
            name="message"
            required 
            />
        </div>
        <Box style={{ marginTop: '12%', marginLeft: '27%' }}>
        <input
            type="submit" 
            value="Send"
            onClick={handleRoute}
            />
        </Box>
        </div>
        </form>
        </VStack>
    </Stack>
  );
};

export default ContactForm;