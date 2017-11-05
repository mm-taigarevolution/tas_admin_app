import * as types from '../common/actionTypes';
import api from '../api/mockAuctionsApi';
import {postBusy} from '../actions/busyActions';
import {putErrorOccurred} from '../actions/errorActions';

export function putAuctionItemDraftByIdSucceeded(value) {
  return {
    type: types.PUT_AUCTION_ITEM_DRAFT_BY_ID, value
  };
}

export function putNewAuctionItemDraft(value) {
  return {
    type: types.PUT_NEW_AUCTION_ITEM_DRAFT, value
  };
}

export function putAuctionItemDraftById(id) {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.getAuctionItemById(id).then(auctionItem => {
      dispatch(postBusy(false));
      dispatch(putAuctionItemDraftByIdSucceeded(auctionItem));
    }).catch((err) => {
      debugger;
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}
