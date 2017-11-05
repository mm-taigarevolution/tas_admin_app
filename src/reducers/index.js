import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import adminReducer from './adminReducer';
import auctionItemsReducer from './auctionItemsReducer';
import auctionItemDraftReducer from './auctionItemDraftReducer';
import busyReducer from './busyReducer';
import errorReducer from './errorReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
  admin: adminReducer,
  auctionItems: auctionItemsReducer,
  auctionItemDraft: auctionItemDraftReducer,
  busy: busyReducer,
  errorOccurred: errorReducer,
  routing: routerReducer,
  toastr: toastrReducer
});

export default rootReducer;
