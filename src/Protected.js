
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = () => {




 const navigate = useNavigate()
  useEffect(() => {
   
    fetch('https://fantastic-pumps-dog.cyclic.app/api/protected', {

      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())


      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogout = () => {

    localStorage.removeItem('token');

    navigate("/login")

  };

  return (
    <div>
      <h2>Protected Data</h2>
      <p>Welcome to the dashboard</p>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default Protected;
