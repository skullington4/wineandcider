// users-api.js

// Add the following import
import sendRequest from './send-request';
const BASE_URL = process.env.REACT_APP_API_URL + '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}