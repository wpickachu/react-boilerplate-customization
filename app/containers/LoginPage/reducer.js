import produce from 'immer';

import { SET_USER_INFO } from './constants';

export const initialState = {
  username: '',
  password: '',
  token: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER_INFO:
        draft.username = action.username;
        draft.password = action.password;
        draft.token = 'temporary token';
        break;
    }
  });

export default loginReducer;
