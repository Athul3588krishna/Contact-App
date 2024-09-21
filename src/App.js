import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Footer from './components/Footer';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (indexToDelete) => {
    const updatedContacts = contacts.filter((_, index) => index !== indexToDelete);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <Header />
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      <Footer />
    </div>
  );
};

export default App;
