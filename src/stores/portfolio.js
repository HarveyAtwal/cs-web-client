import { createAction, handleActions } from 'redux-actions';
import api from 'core/api';

// - actions
export const portfolioNotFound = createAction("PORTFOLIO_404")

// const FETCH_PORTFOLIO_FAILURE = "FETCH_PORTFOLIO_FAILURE";
const fetchPortfolioLoading = createAction("FETCH_PORTFOLIO_LOADING")
const fetchPortfolioSuccess = createAction("FETCH_PORTFOLIO_SUCCESS")
const fetchPortfolioFail = createAction("FETCH_PORTFOLIO_FAILURE")
export const fetchPortfolio = () => (dispatch) => {
  dispatch(fetchPortfolioLoading());

  return api.get(`/portfolio`)
    .then((response) => {
      const { data } = response;
      dispatch(fetchPortfolioSuccess(data))
    })
    .catch((err) => {
      const { response } = err;
      const { status } = response;

      // portfolio not founbd
      if(status === 404) {
        dispatch(portfolioNotFound())
        return;
      }

      dispatch(fetchPortfolioFail());
    })
};

//- State
const initialState = {
  id: -1
}

//- Reducers
export default handleActions({
  FETCH_PORTFOLIO_LOADING: (state, action) => {
    return { ...state, isLoading: true, failed: false }
  },

  FETCH_PORTFOLIO_SUCCESS: (state, action) => ({
    ...state,
    ...action.payload,
    isLoading: false,
  }),

  PORTFOLIO_404: (state, action) => ({
    ...state,
    id: -1,
    isLoading: false,
  }),

  FETCH_PORTFOLIO_FAILURE: (state, action) => ({
    ...state,
    isLoading: false,
    failed: true,
    error: { ...action.payload }
  }),

  AUTH_SIGNOUT: (state, action) => ({
    ...state,
    isLoading: true
  }),
}, initialState)
