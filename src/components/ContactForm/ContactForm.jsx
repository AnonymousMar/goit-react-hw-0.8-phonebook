import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
import { Form, Input, Text, Button } from './ContactForm.styled';

const ContactForm = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const contact = {
            name: name,
            number: number,
        };



        dispatch(addContact(contact));
        setName('');
       setNumber('');
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleNumberChange = event => {
        setNumber(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Text>Name</Text>
            <Input
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

            <Text>Number</Text>
            <Input
                type="tel"
                name="number"
                placeholder="Enter phone number"
                value={number}
                onChange={handleNumberChange}
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Phone number format could be: +1 555 1234567 or 555 1234567."
                required
            />

            <Button type="submit">
                <AddIcon />
            </Button>
        </Form>
    );
};

export default ContactForm;