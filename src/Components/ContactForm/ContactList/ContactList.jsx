import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            deleteContact={() => deleteContact(contact.id)}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
