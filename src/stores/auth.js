import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
export const signout = createAction("AUTH_SIGNOUT")
export const authSignout = () => (dispatch) => {
  dispatch(signout());
  localStorage.removeItem("isLoggedIn");
}

const AUTH_SIGNIN = "AUTH_SIGNIN"
const authSigninLoading  = createAction("AUTH_SIGNIN_LOADING")
const authSigninSuccess = createAction("AUTH_SIGNIN_SUCCESS")
const authSigninError = createAction("AUTH_SIGNIN_ERROR")
export const authSignin = (email, password) => (dispatch) => {
  dispatch(authSigninLoading());

  const config = { noAuth: true };
  return api.post(`/login`, { email, password }, config)
    .then((response) => {
      localStorage.setItem("isLoggedIn", true);
      dispatch(authSigninSuccess())
    })
    .catch((err) => {
      const response = err.response;
      dispatch(authSigninError(response))
      dispatch(error({
        type: AUTH_SIGNIN,
        response: response,
        message: response && response.data.message,
        silent: !response,
        il8n: "page.signin.invalid"
      }))
    })
};

const AUTH_SIGNUP = "AUTH_SIGNUP"
const authSignupLoading  = createAction("AUTH_SIGNUP_LOADING")
const authSignupSuccess = createAction("AUTH_SIGNUP_SUCCESS")
const authSignupError = createAction("AUTH_SIGNUP_ERROR")
export const authSignupRedirect = createAction("AUTH_SIGNUP_REDIRECT")
export const authSignup = (email, password) => (dispatch) => {
  dispatch(authSignupLoading());

  const config = { noAuth: true };
  return api.post(`/register`, { email, password }, config)
    .then((response) => {
      dispatch(authSignupSuccess())
    })
    .catch((err) => {
      const response = err.response;
      dispatch(authSignupError(response))
      dispatch(error({
        type: AUTH_SIGNUP,
        response: response,
        message: response && response.data.message,
        silent: !response,
        il8n: "page.signup.invalid"
      }))
    })
};


//- State
const initialState = {
  isAuthenticating: false,
  isAuthenticated: localStorage.getItem("isLoggedIn") ? true : false
}

//- Reducers
export default handleActions({

  AUTH_SIGNIN_LOADING: (state, action) => ({
    ...state,
    loginError: false,
    isAuthenticating: true
  }),

  AUTH_SIGNIN_SUCCESS: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: true
  }),

  AUTH_SIGNIN_ERROR: (state, action) => ({
    ...state,
    isAuthenticating: false,
    loginError: { ...action.payload }
  }),

  AUTH_SIGNOUT: (state, action) => ({
    ...state,
    isAuthenticated: false
  }),

  AUTH_SIGNUP_LOADING: (state, action) => ({
    ...state,
    registerError: false,
    isRegistering: true
  }),

  AUTH_SIGNUP_ERROR: (state, action) => ({
    ...state,
    registerError: { ...action.payload },
    isRegistering: false
  }),

  AUTH_SIGNUP_SUCCESS: (state, action) => ({
    ...state,
    isRegistering: false,
    isRegistered: true
  }),

  AUTH_SIGNUP_REDIRECT: (state, action) => ({
    ...state,
    isRegistered: false
  }),

  ERROR: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isRegistering: false
  }),

}, initialState)

//- Selectors
