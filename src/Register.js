
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
  
    fetch('https://fantastic-pumps-dog.cyclic.app/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, name })
    })
      .then(response => response.json())
      .then(data => {
     
        localStorage.setItem('token', data.token);
        navigate("/")
        
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
