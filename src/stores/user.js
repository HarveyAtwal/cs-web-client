import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
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
      localStorage.removeItem("isLoggedIn");
      dispatch(fetchCurrentUserFail());
      dispatch(error({
        type: "FETCH_CURRENT_USER_FAILURE",
        response: err.response,
        silent: true
      }))
    })
};

//- State
const initialState = {
  isFetching: true,
  failed: false
}

//- Reducers
export default handleActions({
  FETCH_CURRENT_USER_LOADING: (state, action) => {
    return { ...state, isFetching: true, failed: false }
  },

  FETCH_CURRENT_USER_SUCCESS: (state, action) => {
    return {
      ...state,
      isFetching: false,
      id: action.payload.id
    }
  },

  FETCH_CURRENT_USER_FAILURE: (state, action) => {
    return { ...state, failed: true }
  },

  AUTH_SIGNOUT: (state, action) => ({
    ...state,
    isFetching: true
  }),
}, initialState)
