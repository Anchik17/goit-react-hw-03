import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
