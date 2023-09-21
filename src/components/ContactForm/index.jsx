import { Component } from 'react';
import { Button } from 'components/App.styled';
import {
  ContactFromStyled,
  InputContactFromStyled,
} from './contactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFromStyled onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <InputContactFromStyled
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label>Number</label>
        <InputContactFromStyled
          type="tel"
          name="number"
          onChange={this.handleChange}
          value={this.state.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </ContactFromStyled>
    );
  }
}

export default ContactForm;
