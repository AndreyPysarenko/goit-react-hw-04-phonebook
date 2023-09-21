import { Button } from 'components/App.styled';
import { ListItemStyled, ListItemTextStyled } from './contactListItem.styled';

const ContactListItem = ({ contacts, handleDelete }) => {
  return (
    <>
      <ListItemStyled>
        <ListItemTextStyled>
          {contacts.name}: {contacts.number}
        </ListItemTextStyled>

        <Button type="button" onClick={() => handleDelete(contacts.id)}>
          Delete
        </Button>
      </ListItemStyled>
    </>
  );
};

export default ContactListItem;
