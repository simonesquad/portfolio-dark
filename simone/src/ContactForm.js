import React, { useState } from "react";
import { send } from 'emailjs-com';
import { useHistory } from "react-router-dom";

import {
    Box,
    Button,
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
    const history = useHistory();
    const [toSend, setToSend] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_g41xp9p',
            'template_zveqwp8',
            toSend,
            'user_jMWnlaeLAc6VuXUX6i7eh'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            history.push("/thankyou")
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return(
        <form onSubmit={onSubmit}>
            <Box
                h='15vh'
            >
            <FormControl isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input 
                    type='text'
                    name='user_name'
                    placeholder='Jack Kerouac'
                    value={toSend.user_name}
                    onChange={handleChange}
                    maxLength='30'
                />
            </FormControl>
            </Box>
            <Box
                h='15vh'
            >
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input
                        type='email'
                        name='user_email'
                        placeholder='ballers123@gmail.com'
                        value={toSend.user_email}
                        onChange={handleChange}
                        maxLength='50'
                    />
                </FormControl>
            </Box>
            <Box
                h='15vh'
            >
                <FormControl isRequired>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea
                        name='message'
                        placeholder='Write some thoughts...'
                        value={toSend.message}
                        onChange={handleChange}
                        maxLength='500'
                    />
            </FormControl>
            </Box>
            
        <Box
            marginTop={{
                base: '20%',
                lg: '12%' 
            }}
            marginLeft={{
                base: '26%',
                md: '31%',
                lg: '35%'
            }}
            w='100%'
            h={{
                base: '45vh',
                lg: '35vh'
            }}
        >
        <Button
            w={{
                base: '33vw',
                md: '21vw',
                lg: '12vw'
            }}
            h={{
                base: '6vh',
                lg: '6vh'
            }}
            type="submit" 
        >
            Send
        </Button>
        </Box>
        </form>
  );
};

export default ContactForm;