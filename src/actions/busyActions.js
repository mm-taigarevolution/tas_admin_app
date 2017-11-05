import * as types from '../common/actionTypes';

export function postBusy(value) {
  return {
    type: types.POST_BUSY, value
  };
}
