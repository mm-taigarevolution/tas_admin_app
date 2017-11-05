import * as types from '../common/actionTypes';

export function putErrorOccurred(value) {
  return {
    type: types.PUT_ERROR_OCCURRED, value
  };
}
