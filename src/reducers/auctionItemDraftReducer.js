import {PUT_AUCTION_ITEM_DRAFT_BY_ID,
        PUT_NEW_AUCTION_ITEM_DRAFT} from '../common/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function auctionItemDraftReducer(state = initialState.auctionItemDraft, action) {
  switch (action.type) {
    case PUT_AUCTION_ITEM_DRAFT_BY_ID: {
      return Object.assign({}, action.value);
    }
    case PUT_NEW_AUCTION_ITEM_DRAFT: {
      let newState = Object.assign({}, initialState.auctionItemDraft);
      return newState;
    }
    default:
      return state;
  }
}
