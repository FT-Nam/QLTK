import React, { useState } from 'react';
import { forgotPassword } from '../api/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await forgotPassword(email);
    setMessage(res);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Quên mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br/>
        <button type="submit">Lấy lại mật khẩu</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
} 