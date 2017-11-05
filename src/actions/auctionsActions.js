import * as types from '../common/actionTypes';
import api from '../api/mockAuctionsApi';
import {postBusy} from '../actions/busyActions';
import {putErrorOccurred} from '../actions/errorActions';

export function getAuctionItemsSucceeded(value) {
  return {
    type: types.GET_AUCTION_ITEMS, value
  };
}

export function getAuctionItems() {
  return function(dispatch) {
    dispatch(postBusy(true));
    dispatch(putErrorOccurred(false));
    return api.getAuctionItems().then(auctionItems => {
      dispatch(postBusy(false));
      dispatch(getAuctionItemsSucceeded(auctionItems));
    }).catch((err) => {
      debugger;
      dispatch(putErrorOccurred(true));
      dispatch(postBusy(false));
    });
  };
}
