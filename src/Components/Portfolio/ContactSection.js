import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaPhone, FaEnvelope } from 'react-icons/fa';

const MAX_EMAILS = 2;
const TIME_FRAME = 30 * 60 * 1000; // 30 minutes in milliseconds

const ContactSection = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [sending, setSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        checkEmailLimit();
    }, []);

    const inputClass = `w-full p-3 border rounded ${darkMode ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const checkEmailLimit = () => {
        const emailTimestamps = JSON.parse(localStorage.getItem('emailTtimestamps')) || [];
        const now = Date.now();
        const filteredTimestamps = emailTimestamps.filter(timestamp => now - timestamp < TIME_FRAME);

        localStorage.setItem('emailTimestamps', JSON.stringify(filteredTimestamps));
        return filteredTimestamps.length < MAX_EMAILS;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkEmailLimit()) {
            setResponseMessage('You have reached the email limit. Please try again later.');
            return;
        }

        setSending(true);
        setResponseMessage('');

        try {
            const response = await axios.post(process.env.REACT_APP_EMAIL_API_URL, formData);
            setResponseMessage('Message sent successfully!');

            const emailTimestamps = JSON.parse(localStorage.getItem('emailTimestamps')) || [];
            emailTimestamps.push(Date.now());
            localStorage.setItem('emailTimestamps', JSON.stringify(emailTimestamps));
        } catch (error) {
            console.error('Error sending email:', error);
            setResponseMessage('Failed to send message.');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className={darkMode ? 'dark bg-black text-white h-screen' : 'bg-white h-screen text-black'}>
            <motion.div
                className="container mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.form
                    onSubmit={handleSubmit}
                    className={`mb-0 px-4 py-4 sm:px-6 md:px-8 rounded-lg ${darkMode ? 'bg-black' : 'bg-white'}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4">
                        <label className="hidden sm:block text-sm font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            className={inputClass}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="hidden sm:block text-sm font-bold mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            className={inputClass}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="hidden sm:block text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className={inputClass}
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="hidden sm:block text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={inputClass}
                            id="message"
                            name="message"
                            rows="4"
                            required
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <motion.button
                        className={`w-full p-2 rounded ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} font-bold`}
                        type="submit"
                        disabled={sending}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {sending ? 'Sending...' : 'Send'}
                    </motion.button>
                </motion.form>
                {responseMessage && (
                    <p className="text-sm mb-4 text-center text-gray-400">{responseMessage}</p>
                )}
                <motion.div
                    className="flex space-x-4 pb-0 sm:space-x-6 justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <a target='_blank' href="https://www.linkedin.com/in/sahil-karn/" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                        <FaLinkedin size="1.5em" />
                    </a>
                    <a target='_blank' href="https://github.com/skarn03" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                        <FaGithub size="1.5em" />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/sahilkarn_17/" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                        <FaInstagram size="1.5em" />
                    </a>
                    <a target='_blank' href="https://github.com/saikanepal" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                        <FaGithub size="1.5em" />
                    </a>
                    <a target='_blank' href="https://discord.gg/4673CfDwqk" className={darkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'}>
                        <FaDiscord size="1.5em" />
                    </a>
                </motion.div>
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-center items-center sm:flex-row gap-8 mt-8'>
                        <a href="tel:+17342916822" className="flex items-center gap-2">
                            <FaPhone size="1.5em" />
                            <span>+1 (734) 291-6822</span>
                        </a>
                        <a href="mailto:sahilkarn03@gmail.com" className="flex items-center gap-2"> 
                            <FaEnvelope size="1.5em" />
                            <span>sahilkarn03@gmail.com</span>
                        </a>
                        <a href="mailto:skarn@emich.edu" className="flex items-center gap-2">
                            <FaEnvelope size="1.5em" />
                            <span>skarn@emich.edu</span>
                        </a>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400 mt-4">
                    <p>© {new Date().getFullYear()} Sahil Karn. This portfolio is owned by Sahil Karn and access is open.</p>
                    <p>Feel free to use this template, but please ensure to give credit. View the source on <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">GitHub</a>.</p>

                </div>
            </motion.div>
        </div>
    );
};

export default ContactSection;
