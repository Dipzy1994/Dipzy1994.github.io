import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            query: ''
        });
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={togglePopup}>Contact Us</button>
            {isOpen && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Query:
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={togglePopup}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;