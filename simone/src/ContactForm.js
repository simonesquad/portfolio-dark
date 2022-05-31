import React, { useState } from "react";
// import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com';
import { useHistory } from "react-router-dom";
import './styles/ContactForm.css';

import {
    Box,
    Button,
    // FormErrorMessage,
    // FormLabel,
    // FormControl,
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
            'service_jqkz3qr',
            'template_kqymnmk',
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

    // const handleRoute = () => {
    //     history.push("/thankyou")
    //   }

    return(
        <form onSubmit={onSubmit}>
            <Box
                h='15vh'
            >
            {/* <FormLabel htmlFor="name">Name:</FormLabel> */}
            {/* {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">Name is required!<br/></div>
            )} */}
            <Input 
                type='text'
                name='user_name'
                placeholder='Name'
                value={toSend.user_name}
                onChange={handleChange}
                maxLength='30'
            />
            <br></br>
            </Box>
            <Box
                h='15vh'
            >
            {/* <FormLabel htmlFor="email">Email:</FormLabel> */}
            {/* {errors.user_email && errors.user_email.type === "required" && (
            <div role="alert">Email is required!<br/></div>
            )} */}
            <Input
                type='email'
                name='user_email'
                placeholder='Email'
                value={toSend.user_email}
                onChange={handleChange}
                maxLength='50'
            />
            <br></br>
            </Box>
            <Box
                h='15vh'
            >
            {/* <FormLabel htmlFor="message">Message:</FormLabel> */}
            {/* {errors.message && errors.message.type === "required" && (
            <div role="alert">Message is required!<br/></div>
            )} */}
            <Textarea
                name='message'
                placeholder='Write some thoughts...'
                value={toSend.message}
                onChange={handleChange}
                maxLength='500'
            />
            <br></br>
            {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}
            {/* <br></br> */}
            </Box>
            {/* <FormErrorMessage> */}
            {/* {errors.name && errors.name.message} */}
            {/* </FormErrorMessage> */}
        <Box
            marginTop='12%' 
            marginLeft={{
                sm: '27%',
                md: '31%',
                lg: '35%'
            }}
        >
        <Button
            w={{
                sm: '25vw',
                md: '21vw',
                lg: '12vw'
            }}
            h='6vh'
            type="submit" 
            // value="Send"
            // onClick={handleRoute}
        >
            Send
        </Button>
        </Box>
        </form>
  );
};

export default ContactForm;