import React, { useState } from 'react';
import './Contact.css'
import Button from './../Button/Button'


const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleChangeInputSubject = (event) => {
        setSubject(event.target.value);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChangeInputEmail = (event) => {
        setEmail(event.target.value);
        setErrors({
            ...errors,
            email: null,
        })
    }
    const handleChangeTextArea = (event) => {
        setDescription(event.target.value);
    }
    const handleSubmit = () => {
        console.log('subject: ', subject);
        if (validateEmail(email)) {
            console.log('email: ', email);
        } else {
            setErrors({
                ...errors,
                'email' : 'Email is not valid!'
            })
        }
        console.log('description: ', description);
    }

    return (
        <div className='Contact'>
            {/* <div>Email : {email}</div> */}
            <div className='formControl'>
                <input onChange={handleChangeInputSubject} type='text' placeholder='Subject' />
            </div>
            <div className='formControl'>
                <input onChange={handleChangeInputEmail} type='email' placeholder='Email' />
            </div>
            {errors.email &&<span className='Span'>{errors.email}</span>}
            <div className='formControl'>
                <textarea onChange={handleChangeTextArea} placeholder='Your request here ...'></textarea>
            </div>
            <div className='formControl'>
                <Button handelClick={handleSubmit}> Submit</Button>
            </div>
        </div>
    )
};


export default Contact;