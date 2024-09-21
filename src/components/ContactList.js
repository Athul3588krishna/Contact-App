// src/components/ContactList.js
import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          
          <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
