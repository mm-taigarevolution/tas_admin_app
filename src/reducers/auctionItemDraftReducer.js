import {PUT_INTERNAL_AUCTION_ITEM_DRAFT, PUT_AUCTION_ITEM_DRAFT, POST_AUCTION_ITEM_DRAFT} from '../common/actionTypes';
import initialState from './initialState';
import moment from 'moment';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function auctionItemDraftReducer(state = initialState.auctionItemDraft, action) {
  switch (action.type) {
    case PUT_INTERNAL_AUCTION_ITEM_DRAFT: {
      if(action.value != null) {
        let newState = Object.assign({}, action.value);
        return newState;
      }
      else {
        let newState = Object.assign({}, initialState.auctionItemDraft);
        newState.auctionStart = moment().startOf('day').toISOString();
        newState.auctionEnd = moment().startOf('day').add(7, 'days').toISOString();
        return newState;
      }
    }
/*
    // in case of updating or creating new item, reset the internal draft to default
    case PUT_AUCTION_ITEM_DRAFT:
    case POST_AUCTION_ITEM_DRAFT: {
      debugger;
      let newState = Object.assign({}, initialState.auctionItemDraft);
      return newState;
    }
*/
    default:
      return state;
  }
}
