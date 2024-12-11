import React, { useState } from 'react';
import Button from './shared/Button';
import styles from '../styles/SignIn.module.css';

const SignIn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign in logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Mock authentication
        if (email === 'user@example.com' && password === 'password') {
            console.log('Sign in successful');
            setIsOpen(false);
            setError('');
            // Here you would typically set user state and redirect
        } else {
            setError('Invalid email or password');
        }
    };

    const toggleSignIn = () => {
        setIsOpen(!isOpen);
        setError('');
    };
    return (
        <div className={styles.signInWrapper}>
            <Button 
                text={isOpen ? "Close" : "Sign In"}
                onClick={toggleSignIn}
                className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
            />
            {isOpen && (
                <div className={styles.signInDropdown}>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        <Button 
                            type="submit"
                            text="Sign In"
                            className={`${styles.submitButton} btn-primary`}
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignIn;

