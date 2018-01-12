import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import fetch from 'cross-fetch';

// - Types
const AUTH_SIGNIN = "AUTH_SIGNIN"
const AUTH_SIGNOUT = "AUTH_SIGNOUT"
const AUTH_SIGNIN_LOADING = "AUTH_SIGNIN_LOADING"
const AUTH_SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS"

//- Actions
export const authSignout = createAction('AUTH_SIGNOUT')

const authSigninLoading  = createAction('AUTH_SIGNIN_LOADING')
const authSigninSuccess = createAction('AUTH_SIGNIN_SUCCESS')
export const authSignin = (emailAddress, password) => (dispatch) => {
  dispatch(authSigninLoading());
  
  if(!emailAddress || !password) {
    return dispatch(error({
      type: AUTH_SIGNIN,
      il8n: "page.signin.invalid"
    }));
  }
  
  return fetch('https://api.github.com/users/defunkt')
    .then(res => res.json())
    .then(user => dispatch(authSigninSuccess(user)))
    .catch(error => dispatch(error({
      type: AUTH_SIGNIN,
      il8n: "page.signin.invalid"
    })))
};


//- State
const initialState = {
  isAuthenticating: false,
  isAuthenticated: true,
  user: null
}

//- Reducers
export default handleActions({
  
  AUTH_SIGNIN_LOADING: (state, action) => ({
    ...state, isAuthenticating: true
  }),
  
  AUTH_SIGNIN_SUCCESS: (state, action) => ({
    ...state, 
    user: { ...action.payload },
    isAuthenticating: false,
    isAuthenticated: true
  }),
  
  AUTH_SIGNOUT: (state, action) => ({
    ...state, 
    isAuthenticated: false
  }),
  
  ERROR: (state, action) => ({
    ...state, 
    isAuthenticated: false,
    isAuthenticating: false,
  }),
  
}, initialState)

//- Selectors