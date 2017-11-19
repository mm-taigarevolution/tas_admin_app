import * as types from '../common/actionTypes';
import api from '../api/mockAuctionsApi';
import {postBusy} from '../actions/busyActions';
import {putErrorOccurred} from '../actions/errorActions';

export function putInternalAuctionItemDraft(value) {
  return {
    type: types.PUT_INTERNAL_AUCTION_ITEM_DRAFT, value
  };
}

export function putAuctionItemDraftSucceeded(value) {
  return {
    type: types.PUT_AUCTION_ITEM_DRAFT, value
  };
}

export function postAuctionItemDraftSucceeded(value) {
  return {
    type: types.POST_AUCTION_ITEM_DRAFT, value
  };
}

export function putAuctionItemDraft(item, admin) {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.putAuctionItemDraft(item, admin).then(value => {
      dispatch(postBusy(false));
      dispatch(putAuctionItemDraftSucceeded(value));
    }).catch((err) => {
      debugger;
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}

export function postAuctionItemDraft(item, admin) {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.postAuctionItemDraft(item, admin).then(value => {
      dispatch(postBusy(false));
      dispatch(postAuctionItemDraftSucceeded(value));
    }).catch((err) => {
      debugger;
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}
