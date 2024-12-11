import React, { useState } from 'react';
import Button from './shared/Button';

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.query.trim()) tempErrors.query = "Query is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            setFormData({
                name: '',
                email: '',
                query: ''
            });
            setIsOpen(false);
        }
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
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </label>
                            <label>
                                Query:
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                />
                                {errors.query && <span className="error">{errors.query}</span>}
                            </label>
                            <Button text="Submit" onClick={handleSubmit} />
                            <Button text="Close" onClick={togglePopup} />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
