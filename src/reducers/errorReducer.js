import {PUT_ERROR_OCCURRED} from '../common/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function errorReducer(state = initialState.errorOccurred, action) {
  switch (action.type) {
    case PUT_ERROR_OCCURRED:
      return action.value;
    default:
      return state;
  }
}
