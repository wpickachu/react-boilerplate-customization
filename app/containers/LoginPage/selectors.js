import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUsername = state => state.username || initialState;
// const selectToken = state => state.token || initialState;
const selectPassword = state => state.password || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectUsername,
    homeState => homeState.username,
  );

// const makeSelectToken = () =>
//   createSelector(
//     selectToken,
//     homeState => homeState.token
//   )

const makeSelectPassword = () =>
  createSelector(
    selectPassword,
    homeState => homeState.password,
  );

export { makeSelectUsername, makeSelectPassword };
