import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import portfolio from './portfolio';
import currencies from './currencies';
import coins from './coins';
import error from './error';

export default combineReducers({
  auth,
  user,
  portfolio,
  currencies,
  coins,
  errors: error
});
