import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import ReCAPTCHA from 'react-google-recaptcha';
import { send } from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);


    useEffect(() => {
        setCanSubmit(canSubmitForm());
    }, []);

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
    const isClientSide = () => typeof window !== 'undefined';
    const canSubmitForm = () => {
        if (!isClientSide()) {
            return false;
        }
        const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
        const timeDifferenceInHours =
            (Date.now() - (lastSubmissionTime || 0)) / 1000 / 60 / 60;

        return timeDifferenceInHours >= 5; // Replace 2 with the number of hours you want
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (recaptchaToken) {
            const serviceId = 'service_8brirop';
            const templateId = 'template_wuxi2kc';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            const templateParams = {
                from_name: name,
                reply_to: email,
                message: message,
            };

            try {
                const result = await send(serviceId, templateId, templateParams, publicKey);
                console.log(result.text);
                setIsFormSubmitted(true);
                if (isClientSide()) {
                    localStorage.setItem('lastSubmissionTime', Date.now());
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Please complete the recaptcha.');
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
                {isFormSubmitted ? (
                    <p className="text-xl text-green-600 bg-white w-full p-4 max-w-prose">
                        Thank you! Your message has been sent successfully.
                    </p>
                ) : canSubmit ? (<form onSubmit={handleSubmit}>
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
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
                        onChange={handleRecaptchaChange}
                        render={(props) => <div {...props} />}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded"
                    >
                        Send
                    </button>
                </form>) : (
                    <p className="text-xl text-red-600 bg-white w-full max-w-prose p-4">
                        You have already submitted a message, please try again later.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Contact;

export async function getStaticProps() {

    return {
        props: {
            title: 'Contact', // Set the title here
        }
    };
}