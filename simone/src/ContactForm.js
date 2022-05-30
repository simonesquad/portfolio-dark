import React, { useRef } from "react";
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";
import './styles/ContactForm.css';

import {
    Box,
    Stack,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

const ContactForm = () => {
    const form = useRef();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()
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
        <form 
            ref={form} 
            onSubmit={handleSubmit(sendEmail)}>
            <FormControl isInvalid={errors.name}>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Input 
            type="text"
            name="user_name"
            required
            />
            </Box>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input 
            type="email"
            name="user_email"
            required 
            />
            </Box>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="message">Message:</FormLabel>
            <Input 
            type="message"
            name="message"
            required 
            />
            </Box>
            <FormErrorMessage>
            {errors.name && errors.name.message}
            </FormErrorMessage>
            </FormControl>
        <Box
            marginTop='12%' 
            marginLeft={{
                sm: '22%',
                md: '40%',
                lg: '35%'
            }}
        >
        <input
            type="submit" 
            value="Send"
            onClick={handleRoute}
        >
        </input>
        </Box>
        </form>
  );
};

export default ContactForm;