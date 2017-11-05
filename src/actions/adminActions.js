import * as types from '../common/actionTypes';
import api from '../api/mockLoginApi';
import {postBusy} from '../actions/busyActions';
import {putErrorOccurred} from '../actions/errorActions';

export function loginSucceeded(value) {
  return {
    type: types.POST_LOGIN, value
  };
}

export function logoutSucceeded(value) {
  return {
    type: types.POST_LOGOUT, value
  };
}

export function login(userName, password) {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.login(userName, password).then(admin => {
      dispatch(postBusy(false));
      dispatch(loginSucceeded(admin));
    }).catch((err) => {
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}

export function logout() {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.logout().then(admin => {
      dispatch(postBusy(false));
      dispatch(logoutSucceeded(admin));
    }).catch((err) => {
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}
