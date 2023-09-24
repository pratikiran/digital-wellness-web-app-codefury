export async function fetchProfile() {
    const response = await fetch('http://localhost:5000/api/users/profile');
    const data = await response.json();
    return data;
}

export function storeToken(token) {
    localStorage.setItem('token', token);
}

export function getToken() {
    return localStorage.getItem('token');
}

export function authHeaders() {
    const token = getToken();
    return {
        'Authorization': `Bearer ${token}`
    };
}
