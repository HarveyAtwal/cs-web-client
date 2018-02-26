import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import axios from 'axios';

// - actions
export const signout = createAction("AUTH_SIGNOUT")
export const authSignout = () => (dispatch) => {
  dispatch(signout());
  localStorage.removeItem("jwt_token");
}

const AUTH_SIGNIN = "AUTH_SIGNIN"
const authSigninLoading  = createAction("AUTH_SIGNIN_LOADING")
const authSigninSuccess = createAction("AUTH_SIGNIN_SUCCESS")
const authSigninError = createAction("AUTH_SIGNIN_ERROR")
export const authSignin = (emailAddress, password) => (dispatch) => {
  dispatch(authSigninLoading());

  return axios.post(`${process.env.REACT_APP_API_HOST}/login`, {
      email: emailAddress,
      password: password
    })
    .then((response) => {
      localStorage.setItem("jwt_token", response.data);
      dispatch(authSigninSuccess())
    })
    .catch((err) => {
      dispatch(authSigninError(err.response.data))
      dispatch(error({
        type: AUTH_SIGNIN,
        message: err.response.data.message,
        il8n: "page.signin.invalid"
      }))
    })
};

const AUTH_SIGNUP = "AUTH_SIGNUP"
const authSignupLoading  = createAction("AUTH_SIGNUP_LOADING")
const authSignupSuccess = createAction("AUTH_SIGNUP_SUCCESS")
const authSignupError = createAction("AUTH_SIGNUP_ERROR")
export const authSignupRedirect = createAction("AUTH_SIGNUP_REDIRECT")
export const authSignup = (emailAddress, password) => (dispatch) => {
  dispatch(authSignupLoading());

  return axios.post(`${process.env.REACT_APP_API_HOST}/register`, {
      email: emailAddress,
      password: password
    })
    .then((response) => {
      dispatch(authSignupSuccess())
    })
    .catch((err) => {
      dispatch(authSignupError(err.response.data))
      dispatch(error({
        type: AUTH_SIGNUP,
        message: err.response.data.message,
        il8n: "page.signup.invalid"
      }))
    })
};


//- State
const initialState = {
  isAuthenticating: false,
  isAuthenticated: localStorage.getItem("jwt_token") ? true : false,
  user: null
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
    loginError: { ... action.payload }
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
    isAuthenticated: false,
    isAuthenticating: false,
    isRegistering: false
  }),

}, initialState)

//- Selectors
