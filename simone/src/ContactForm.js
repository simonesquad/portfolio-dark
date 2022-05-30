import React from "react";
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";
import './styles/ContactForm.css';

import {
    Box,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Textarea
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
    const {
        register,
        handleSubmit,
        watch,
        errors
    } = useForm();
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;

    const onSubmit = data => console.log(data);

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
            onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="name">Name:</FormLabel>
            {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">Name is required!<br/></div>
            )}
            <Input 
                type="text"
                name="user_name"
                placeholder='Name'
                maxLength='30'
                aria-invalid={errors.user_name ? "true" : "false"}
                ref={register({ required: true })}
            />
            </Box>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="email">Email:</FormLabel>
            {errors.user_email && errors.user_email.type === "required" && (
            <div role="alert">Email is required!<br/></div>
            )}
            <Input 
                type="email"
                name="user_email"
                placeholder='Email'
                maxLength='50'
                aria-invalid={errors.user_email ? "true" : "false"}
                ref={register({ required: true })}
            />
            </Box>
            <Box
                h='15vh'
            >
            <FormLabel htmlFor="message">Message:</FormLabel>
            {errors.user_message && errors.user_message.type === "required" && (
            <div role="alert">Message is required!<br/></div>
            )}
            <Textarea 
                type="message"
                name="user_message"
                placeholder='Write some thoughts...'
                maxLength='500'
                aria-invalid={errors.user_message ? "true" : "false"}
                ref={register({ required: true })}
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