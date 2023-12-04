import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forget.css';

const ForgotPassword = () => {
  const n = useNavigate();
const Si = () =>{
  n('/Signin')
}

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password reset logic here (e.g., send a reset link to the provided email)
    setMessage(`Password reset link sent to : ${email}`);
    setEmail(''); // Clear the email input after submission
  };

  return (
    <div className='fgp'>
    <div className="forgot-password-container">
      <button onClick={Si}>Back</button>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email address:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default ForgotPassword;