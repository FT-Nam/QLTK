import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AccountManagementPage from './pages/AccountManagementPage';

function App() {
  const [page, setPage] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setPage('manage');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPage('login');
  };

  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        {!loggedIn && <>
          <button onClick={() => setPage('login')}>Đăng nhập</button>
          <button onClick={() => setPage('register')}>Đăng ký</button>
          <button onClick={() => setPage('forgot')}>Quên mật khẩu</button>
        </>}
        {loggedIn && <>
          <button onClick={() => setPage('manage')}>Quản lý tài khoản</button>
          <button onClick={handleLogout}>Đăng xuất</button>
        </>}
      </nav>
      {page === 'login' && <LoginPage onLogin={handleLogin} />}
      {page === 'register' && <RegisterPage />}
      {page === 'forgot' && <ForgotPasswordPage />}
      {page === 'manage' && loggedIn && <AccountManagementPage />}
    </div>
  );
}

export default App;
