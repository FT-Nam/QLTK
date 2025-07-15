import React, { useEffect, useState } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../api/api';
import AccountList from '../components/AccountList';
import AccountForm from '../components/AccountForm';

export default function AccountManagementPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('add');

  const fetchUsers = async () => {
    setUsers(await getUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = () => {
    setEditingUser(null);
    setFormType('add');
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormType('edit');
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleFormSubmit = async (user) => {
    if (formType === 'add') {
      await addUser(user);
    } else if (formType === 'edit' && editingUser) {
      await updateUser(editingUser.id, user);
    }
    setShowForm(false);
    fetchUsers();
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Quản lý tài khoản</h2>
      <button onClick={handleAdd}>Thêm tài khoản</button>
      <AccountList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && (
        <div style={{ marginTop: 20 }}>
          <AccountForm
            onSubmit={handleFormSubmit}
            initialData={editingUser}
            submitText={formType === 'add' ? 'Thêm' : 'Cập nhật'}
          />
          <button onClick={() => setShowForm(false)} style={{ marginTop: 8 }}>Đóng</button>
        </div>
      )}
    </div>
  );
} 