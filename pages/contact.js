import React, { useState } from 'react';
import Navbar from './components/navbar'
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (recaptchaToken) {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
                recaptchaToken,
            }),
          });
    
          const data = await response.json();
    
          console.log(data);
        } else {
          alert('Please complete the recaptcha.');
        }
      };
    

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className="w-full border-2 border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border-2 border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full border-2 border-gray-300 p-2 rounded"
                        ></textarea>
                    </div>
                    <ReCAPTCHA 
                        sitekey="6LfHrnYlAAAAADRJ2xalnoEbbitFPlqJsugg4qxr"
                        onChange={handleRecaptchaChange}
                        render={(props) => <div {...props} />}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
