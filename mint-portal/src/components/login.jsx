
import React, { useState } from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';


function Login(){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    // Add your own logic for handling login here
  };

  return (
    <div className="login-container">
      <div className="logo-container">
    </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit">Login</button>
        <button><Link to="/ForgotPassword">I forgot my password</Link></button>
      </form>
      <div className="text-part">
        <h2>Welcome to Business Portal</h2>
        <p>The national business portal is a one-stop portal for e-government services that improves ease of doing business in Ethiopia through the automation of essential government services leveraging information and communication technologies. This portal has been developed to provide centralized information about government services and provide electronic services to citizens, non-citizens, businesses, and governmental & non-governmental organizations.</p>
      </div>
    </div>
  );
}

export default Login;