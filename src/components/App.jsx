import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createNewContact = dataByForm => {
    const isAlreadyExist = contacts.find(el => el.name === dataByForm.name);
    if (isAlreadyExist)
      return alert(`${dataByForm.name} is already in contacts.`);

    const newContacts = {
      ...dataByForm,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, newContacts]);
  };

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = () => {
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={createNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts()} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
