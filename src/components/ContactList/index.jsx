import ContactListItem from 'components/ContactListItem';
import { ListStyled } from './contactList.styled';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <ListStyled>
        {contacts.map(contact => (
          <ContactListItem
            contacts={contact}
            key={contact.id}
            handleDelete={handleDelete}
          />
        ))}
      </ListStyled>
    </>
  );
};

export default ContactList;
