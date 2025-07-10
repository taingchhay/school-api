
import jwt_decode from 'jwt-decode';

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded = jwt_decode(token);
    if (decoded.exp * 1000 < Date.now()) {
      logout();
      return null;
    }
    return decoded;
  } catch {
    logout();
    return null;
  }
}


export function setToken(token) {
  localStorage.setItem('token', token);
}


export function logout() {
  localStorage.removeItem('token');
}