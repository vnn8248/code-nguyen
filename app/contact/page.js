import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto pt-32 pb-12 lg:pt-48 lg:pb-12">
      <h1 className="text-3xl font-bold">Give me a shout.</h1>
      <p>Or just say hello.</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
