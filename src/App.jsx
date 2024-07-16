import { useEffect, useState } from 'react';
import ContactForm from './qwe/ContactForm/ContactForm';
import ContactList from './qwe/ContactList/ContactList';
import SearchBox from './qwe/SearchBox/SearchBox';
import phoneBook from '../src/assets/phoneBook.json';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contactsData');
    return savedContacts ? JSON.parse(savedContacts) : phoneBook;
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

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
