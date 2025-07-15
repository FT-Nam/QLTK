const API_URL = 'http://localhost:8080/api';

export async function login(username, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    return res.text();
}

export async function register(username, password, email) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
    });
    return res.text();
}

export async function forgotPassword(email) {
    const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    return res.text();
}

export async function getUsers() {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
}

export async function addUser(user) {
    const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function updateUser(id, user) {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    return res.json();
}

export async function deleteUser(id) {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE'
    });
    return res.text();
} 