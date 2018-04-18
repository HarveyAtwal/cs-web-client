import { createAction, handleActions } from 'redux-actions';
import { error } from './error';
import api from 'core/api';

// - actions
export const fetchPortfolioNotFound = createAction("FETCH_PORTFOLIO_404")
const fetchPortfolioLoading = createAction("FETCH_PORTFOLIO_LOADING")
const fetchPortfolioSuccess = createAction("FETCH_PORTFOLIO_SUCCESS")
const fetchPortfolioError = createAction("FETCH_PORTFOLIO_ERROR")
export const fetchPortfolio = () => (dispatch) => {
  dispatch(fetchPortfolioLoading());

  return api.get(`/portfolios`)
    .then((response) => {
      const { portfolios } = response.data;
      dispatch(fetchPortfolioSuccess(portfolios))
    })
    .catch((err) => {
      const { response } = err;
      const { status } = response;

      // portfolio not found
      if(status === 404) {
        dispatch(fetchPortfolioNotFound())
        return;
      }

      dispatch(fetchPortfolioError());
    })
};


const postPortfolioLoading  = createAction("POST_PORTFOLIO_LOADING")
const postPortfolioSuccess = createAction("POST_PORTFOLIO_SUCCESS")
const postPortfolioError = createAction("POST_PORTFOLIO_ERROR")
export const postPortfolio = (payload) => (dispatch) => {
  dispatch(postPortfolioLoading());

  const request = {
    displayName: payload.displayName,
    localCurrency: payload.localCurrency,
    accumulatingCurrency: payload.accumulatingCurrency,
    isDefault: payload.isDefault || false
  };

  return api.post(`/portfolios`, payload)
    .then((response) => {
      const { data } = response;
      dispatch(postPortfolioSuccess(data))
    })
    .catch((err) => {
      dispatch(postPortfolioError(err.response))
      dispatch(error({
        type: "POST_PORTFOLIO",
        response: err.response,
        silent: true
      }))
    })
};

//- State
const initialState = {
  id: -1,
  isPosting: false,
  fetchFailed: false,
  postFailed: false,
}

//- Reducers
export default handleActions({
  FETCH_PORTFOLIO_LOADING: (state, action) => {
    return {
      ...state,
      isFetching: true,
      fetchFailed: false
    }
  },
  FETCH_PORTFOLIO_SUCCESS: (state, action) => {
    const portfolios = action.payload;
    const defaultPortfolio = portfolios.find(portfolio => portfolio.is_default) || {};
    return {
      ...state,
      id: defaultPortfolio.id || -1,
      isFetching: false
    }
  },
  FETCH_PORTFOLIO_ERROR: (state, action) => ({
    ...state,
    isFetching: false,
    fetchFailed: true,
    error: { ...action.payload }
  }),
  FETCH_PORTFOLIO_404: (state, action) => ({
    ...state,
    id: -1,
    isFetching: false,
  }),


  POST_PORTFOLIO_LOADING: (state, action) => ({
    ...state,
    isPosting: true,
    postFailed: false
  }),
  POST_PORTFOLIO_SUCCESS: (state, action) => ({
    ...state,
    isPosting: false,
    id: action.payload.id
  }),
  POST_PORTFOLIO_ERROR: (state, action) => ({
    ...state,
    error: { ...action.payload },
    isPosting: false,
    postFailed: true
  }),

  AUTH_SIGNOUT: (state, action) => ({
    ...state,
    ...initialState
  }),
}, initialState)
