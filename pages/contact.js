import React from 'react';
import Navbar from './components/navbar'


const Contact = () => {
    return (<div>
        <Navbar />
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
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
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    ></textarea>
                </div>
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
