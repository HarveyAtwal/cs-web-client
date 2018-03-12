import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import portfolio from './portfolio';
import error from './error';

export default combineReducers({
  auth,
  user,
  portfolio,
  errors: error
});
