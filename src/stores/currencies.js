import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
const fetchCurrenciesLoading = createAction("FETCH_CURRENCIES_LOADING")
const fetchCurrenciesSuccess = createAction("FETCH_CURRENCIES_SUCCESS")
const fetchCurrenciesFailure = createAction("FETCH_CURRENCIES_FAILURE")
export const fetchCurrencies = () => (dispatch) => {
  dispatch(fetchCurrenciesLoading());

  return api.get(`/currencies`)
    .then((response) => {
      const { data } = response;
      dispatch(fetchCurrenciesSuccess(data))
    })
    .catch((err) => {
      dispatch(fetchCurrenciesFailure());
      dispatch(error({
        type: "FETCH_CURRENCIES_FAILURE",
        response: err.response,
        silent: true
      }))
    })
};

//- State
const initialState = {
  isFetchingCurrencies: true,
  failedToFetchCurrencies: false
}

//- Reducers
export default handleActions({
  FETCH_CURRENCIES_LOADING: (state, action) => {
    return { ...state, isFetchingCurrencies: true, failedToFetchCurrencies: false }
  },

  FETCH_CURRENCIES_SUCCESS: (state, action) => {
    return {
      ...state,
      isFetchingCurrencies: false,
      ...action.payload
    }
  },

  FETCH_CURRENCIES_FAILURE: (state, action) => {
    return { ...state, failedToFetchCurrencies: true }
  },
}, initialState)
