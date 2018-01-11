import { createAction, handleActions } from 'redux-actions';
import fetch from 'cross-fetch';

//- Actions
const authSigninLoading  = createAction('AUTH_SIGNIN_LOADING')
const authSigninSuccess = createAction('AUTH_SIGNIN_SUCCESS')
const authSigninError = createAction('AUTH_SIGNIN_ERROR')

export const authSignin = (emailAddress, password) => (dispatch) => {
  dispatch(authSigninLoading());
  
  return fetch('https://api.github.com/users/defunkt')
    .then(res => res.json())
    .then(user => dispatch(authSigninSuccess(user)))
    .catch(error => dispatch(authSigninError()))
};


//- State
const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
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
  
  AUTH_SIGNIN_ERROR: (state, action) => ({
    ...state, 
    isAuthenticating: false
  }),
  
}, initialState)

//- Selectors