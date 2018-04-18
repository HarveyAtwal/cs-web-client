import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
const fetchCoinsLoading = createAction("FETCH_COINS_LOADING")
const fetchCoinsSuccess = createAction("FETCH_COINS_SUCCESS")
const fetchCoinsFailure = createAction("FETCH_COINS_FAILURE")
export const fetchCoins = () => (dispatch) => {
  dispatch(fetchCoinsLoading());

  return api.get(`/coins`)
    .then((response) => {
      const { coins } = response.data;
      dispatch(fetchCoinsSuccess(coins))
    })
    .catch((err) => {
      dispatch(fetchCoinsFailure());
      dispatch(error({
        type: "FETCH_COINS_FAILURE",
        response: err.response,
        silent: true
      }))
    })
};

//- State
const initialState = {
  isFetchingCoins: true,
  failedToFetchCoins: false
}

//- Reducers
export default handleActions({
  FETCH_COINS_LOADING: (state, action) => {
    return { ...state, isFetchingCoins: true, failedToFetchCoins: false }
  },

  FETCH_COINS_SUCCESS: (state, action) => {
    return {
      ...state,
      isFetchingCoins: false
    }
  },

  FETCH_COINS_FAILURE: (state, action) => {
    return { ...state, failedToFetchCoins: true }
  },
}, initialState)
