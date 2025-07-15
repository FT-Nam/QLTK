import React from 'react';

export default function AccountList({ users, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8" style={{ margin: 'auto', minWidth: 400 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên đăng nhập</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onEdit(user)}>Sửa</button>
              <button onClick={() => onDelete(user.id)} style={{ marginLeft: 8 }}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 