'use client';

import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [validated, setValidation] = useState(false);

  const validateForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // validateForm();

    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitting(false);
      toast.success('Message sent. Cheers!');
    } else {
      setSubmitting(false);
      toast.error(
        "Something went wrong. Sorry about that. Give it a try later. I'm on it."
      );
      console.log('Errors', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="name">Name</label>
          <div className="bg-slate-100 flex flex-col">
            {error &&
              error.map((e) => {
                if (e.path === 'name') {
                  return (
                    <div className="text-red-600 px-5 py-2">{e.message}</div>
                  );
                }
              })}
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="Name"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div className="bg-slate-100 flex flex-col">
            {error &&
              error.map((e) => {
                if (e.path === 'email') {
                  return (
                    <div className="text-red-600 px-5 py-2">{e.message}</div>
                  );
                }
              })}
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <div className="bg-slate-100 flex flex-col">
            {error &&
              error.map((e) => {
                if (e.path === 'message') {
                  return (
                    <div className="text-red-600 px-5 py-2">{e.message}</div>
                  );
                }
              })}
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          className="bg-green-700 p-3 text-white font-bold submit"
          type="submit"
        >
          {submitting ? <Spinner /> : 'Send'}
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ContactForm;
