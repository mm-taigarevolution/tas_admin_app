import {POST_BUSY} from '../common/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function busyReducer(state = initialState.busy, action) {
  switch (action.type) {
    case POST_BUSY: {
      let newState = Object.assign({}, state);

      if(action.value == true) {
        newState.numberOfBusyOperations += 1;
      }
      else {
        newState.numberOfBusyOperations -= 1;
      }
      newState.isBusy = newState.numberOfBusyOperations > 0;

      return newState;
    }
    default:
      return state;
  }
}
