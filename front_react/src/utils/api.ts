import request from 'utils/request';
export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
import { makeApiPayload } from './makeApiPayload';
const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export function postLogin(payload: any) {
  const options = makeApiPayload('/api/auth/login', 'POST', payload);
  return request(options);
}

export function getLogout() {
  const options = makeApiPayload('/logout', 'GET');
  return request(options);
}

export function RegisterUser(data: any) {
  const options = makeApiPayload(`/api/auth/signup`, 'POST', data);
  return request(options);
}
export function GetAdminUser() {
  const options = makeApiPayload(`/api/auth/profile`, 'GET', null, headers);
  return request(options);
}
export function GetUserProfile() {
  const options = makeApiPayload(`/api/user_profile`, 'GET');
  return request(options);
}

export function UpdateUserProfile(payload: any) {
  const options = makeApiPayload(`/api/user_profile/1`, 'PUT', payload, headers);
  return request(options);
}
