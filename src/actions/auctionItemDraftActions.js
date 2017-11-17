import * as types from '../common/actionTypes';
import api from '../api/mockAuctionsApi';
import {postBusy} from '../actions/busyActions';
import {putErrorOccurred} from '../actions/errorActions';

export function putAuctionItemDraft(value) {
  return {
    type: types.PUT_AUCTION_ITEM_DRAFT, value
  };
}
