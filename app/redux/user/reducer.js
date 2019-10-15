import * as types from './types';
import { handleActions } from 'redux-actions';

export const initialState = {
  username: '',
  token: '',
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = handleActions(
  {
      [types.SET_USER_INFO]: (state, { payload }) => {
        const { username } = payload;
        return { ...state, username };
      }, 
      [types.SET_TOKEN]: (state, { payload }) => {
        return { ...state, token: payload };
      }
  }, initialState
);

export default userReducer;
