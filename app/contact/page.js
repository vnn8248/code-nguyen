import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto pt-32 pb-12 px-10 md:px-16 md:pt-48 lg:pb-12">
            <div className="text-center">
                <h1 className="font-bold mb-4">Give me a shout.</h1>
            </div>
            <div className="text-left mx-auto px-12 md:px-16 lg:pl-32 lg:pr-44 lg:max-w-4xl relative">
                <p>
                    If you would like to work together, or just say hello, send me a message. I love
                    hearing from people from all around the world.
                </p>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
