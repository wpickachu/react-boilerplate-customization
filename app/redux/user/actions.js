import * as types from './types';
import { createAction } from "redux-actions";

export const setUserInfo = createAction(types.SET_USER_INFO);
export const setToken = createAction(types.SET_TOKEN);