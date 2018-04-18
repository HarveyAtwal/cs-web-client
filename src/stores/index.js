import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import entities from './entities';
import portfolio from './portfolio';
import currencies from './currencies';
import coins from './coins';
import errors from './error';

export default combineReducers({
  entities,
  errors,
  auth,
  user,
  portfolio,
  currencies,
  coins
});
