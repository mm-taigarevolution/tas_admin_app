import {POST_LOGIN,
        POST_LOGOUT} from '../common/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function adminReducer(state = initialState.admin, action) {
  switch (action.type) {
    case POST_LOGIN: {
      let newState = Object.assign({}, action.value);
      newState.loggedIn = true;
      return newState;
    }
    case POST_LOGOUT: {
      let newState = Object.assign({}, action.value);
      newState.loggedIn = false;
      return newState;
    }
    default:
      return state;
  }
}
