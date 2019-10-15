import { SET_USER_INFO } from './constants';

export function setUserInfo() {
  return {
    type: SET_USER_INFO,
    username,
    password,
  };
}
