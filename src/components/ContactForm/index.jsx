import { useState } from 'react';
import { Button } from 'components/App.styled';
import {
  ContactFromStyled,
  InputContactFromStyled,
} from './contactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ContactFromStyled onSubmit={handleFormSubmit}>
      <label>Name</label>
      <InputContactFromStyled
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label>Number</label>
      <InputContactFromStyled
        type="tel"
        name="number"
        onChange={handleChange}
        value={number}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </ContactFromStyled>
  );
};

export default ContactForm;
