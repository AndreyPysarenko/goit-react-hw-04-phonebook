import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  createNewContact = dataByForm => {
    const isAlreadyExist = this.state.contacts.find(
      el => el.name === dataByForm.name
    );
    if (isAlreadyExist)
      return alert(`${dataByForm.name} is already in contacts.`);

    const newContacts = {
      ...dataByForm,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContacts, ...prev.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.createNewContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
