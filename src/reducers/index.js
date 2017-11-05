import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import adminReducer from './adminReducer';
import busyReducer from './busyReducer';
import errorReducer from './errorReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
  admin: adminReducer,
  busy: busyReducer,
  errorOccurred: errorReducer,
  routing: routerReducer,
  toastr: toastrReducer
});

export default rootReducer;
