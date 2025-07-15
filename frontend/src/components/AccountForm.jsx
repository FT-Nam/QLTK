import React, { useState, useEffect } from 'react';

export default function AccountForm({ onSubmit, initialData, submitText }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setUsername(initialData.username || '');
      setPassword(initialData.password || '');
      setEmail(initialData.email || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      /><br/>
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      /><br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      /><br/>
      <button type="submit">{submitText || 'Lưu'}</button>
    </form>
  );
} 