import {GET_AUCTION_ITEMS, PUT_AUCTION_ITEM_DRAFT, POST_AUCTION_ITEM_DRAFT} from '../common/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note using Object.assign to create a copy of current state
// and update values on the copy.
export default function auctionItemsReducer(state = initialState.auctionItems, action) {
  switch (action.type) {
    case GET_AUCTION_ITEMS: {
      let newState = [];
      let newItems = action.value;
      if(newItems.length > 0) {
         newItems.map(function(item) {
          let updatedItem = Object.assign({}, item);
          let bids = Object.assign([], updatedItem.bids);

          if(bids.length > 0) {
            // sort from highest bid to lowest
            bids.sort(function(a,b){
              return b.bidAmount - a.bidAmount;
            });
            updatedItem.bids = Object.assign([], bids);
            updatedItem.currentPrice = bids[0].bidAmount;
          }

          else {
            updatedItem.currentPrice = updatedItem.startPrice;
          }

          newState.push(updatedItem);
        });
      }
      return newState;
    }

    case PUT_AUCTION_ITEM_DRAFT: {
      let newState = [];

      state.map(function(item) {
        if(item.id == action.value.id) {
          newState.push(action.value);
        }
        else {
          newState.push(item);
        }
      });
      return newState;
    }

    case POST_AUCTION_ITEM_DRAFT: {
      let newState = [...state];
      newState.push(action.value);
      return newState;
    }
    default:
      return state;
  }
}
