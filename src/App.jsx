import { useEffect, useState } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import SearchBox from './Components/ContactForm/SearchBox/SearchBox';
import ContactList from './Components/ContactForm/ContactList/ContactList';
import { nanoid } from 'nanoid';
import phoneBook from '../src/assets/phoneBook.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contactsData');
    savedContacts ? Json.parse(savedContacts) : phoneBook;
  });

  useEffect(() => {
    window.localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState('');

  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search) ||
      contact.number.includes(search)
  );

  const addContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search) ||
      contact.number.includes(search)
  );

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox search={search} onSearch={setSearch} />
      <ContactList contacts={contacts} />
    </div>
  );
};
