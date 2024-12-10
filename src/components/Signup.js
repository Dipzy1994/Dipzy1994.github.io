import React, { useState } from 'react';  
  
function Signup() {  
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [confirmPassword, setConfirmPassword] = useState('');  
  const [error, setError] = useState(null);  
  
  const handleSubmit = (event) => {  
   event.preventDefault();  
   if (password !== confirmPassword) {  
    setError('Passwords do not match');  
   } else {  
    // Call API to create new user  
    fetch('/api/signup', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ username, email, password }),  
    })  
      .then((response) => response.json())  
      .then((data) => {  
       if (data.success) {  
        // Redirect to login page or dashboard  
        window.location.href = '/login';  
       } else {  
        setError(data.error);  
       }  
      })  
      .catch((error) => setError(error.message));  
   }  
  };  
  
  return (  
   <div>  
    <h2>Sign up</h2>  
    <form onSubmit={handleSubmit}>  
      <label>  
       Username:  
       <input  
        type="text"  
        value={username}  
        onChange={(event) => setUsername(event.target.value)}  
       />  
      </label>  
      <br />  
      <label>  
       Email:  
       <input  
        type="email"  
        value={email}  
        onChange={(event) => setEmail(event.target.value)}  
       />  
      </label>  
      <br />  
      <label>  
       Password:  
       <input  
        type="password"  
        value={password}  
        onChange={(event) => setPassword(event.target.value)}  
       />  
      </label>  
      <br />  
      <label>  
       Confirm Password:  
       <input  
        type="password"  
        value={confirmPassword}  
        onChange={(event) => setConfirmPassword(event.target.value)}  
       />  
      </label>  
      <br />  
      <button type="submit">Sign up</button>  
      {error && <p style={{ color: 'red' }}>{error}</p>}  
    </form>  
   </div>  
  );  
}  
  
export default Signup;