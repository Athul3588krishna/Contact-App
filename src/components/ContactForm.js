// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
