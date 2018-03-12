import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
const FETCH_CURRENT_USER_FAILURE = "FETCH_CURRENT_USER_FAILURE";
const fetchCurrentUserLoading = createAction("FETCH_CURRENT_USER_LOADING")
const fetchCurrentUserSuccess = createAction("FETCH_CURRENT_USER_SUCCESS")
const fetchCurrentUserFail = createAction("FETCH_CURRENT_USER_FAILURE")
export const fetchCurrentUser = () => (dispatch) => {
  dispatch(fetchCurrentUserLoading());

  return api.get(`/user`)
    .then((response) => {
      const { data } = response;
      dispatch(fetchCurrentUserSuccess(data))
    })
    .catch((err) => {
      const { data } = err.response.data;

      localStorage.removeItem("isLoggedIn");
      dispatch(fetchCurrentUserFail());
      dispatch(error({
        type: FETCH_CURRENT_USER_FAILURE,
        message: data,
        silent: true
      }))
    })
};

//- State
const initialState = {
  isLoading: true,
  failed: false
}

//- Reducers
export default handleActions({
  FETCH_CURRENT_USER_LOADING: (state, action) => {
    return { ...state, isLoading: true, failed: false }
  },

  FETCH_CURRENT_USER_SUCCESS: (state, action) => {
    return {
      ...state,
      isLoading: false,
      ...action.payload
    }
  },

  FETCH_CURRENT_USER_FAILURE: (state, action) => {
    return { ...state, failed: true }
  },

  AUTH_SIGNOUT: (state, action) => ({
    ...state,
    isLoading: true
  }),
}, initialState)
