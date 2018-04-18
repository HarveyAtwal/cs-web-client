import { normalize } from 'normalizr';
import { handleActions } from 'redux-actions';
import * as schemas from 'schemas';

const initialState = {
  coins: {},
  currencies: {},
  users: {},
  portfolios: {}
}

export default handleActions({
  FETCH_CURRENT_USER_SUCCESS: (state, action) => ({
    ...state,
    ...normalize(action.payload, schemas.user).entities
  }),

  FETCH_COINS_SUCCESS: (state, action) => ({
    ...state,
    ...normalize(action.payload, [schemas.coin]).entities
  }),

  FETCH_CURRENCIES_SUCCESS: (state, action) => ({
    ...state,
    ...normalize(action.payload, [schemas.currency]).entities
  }),

  FETCH_PORTFOLIO_SUCCESS: (state, action) => ({
    ...state,
    ...normalize(action.payload, [schemas.portfolio]).entities
  }),
  POST_PORTFOLIO_SUCCESS: (state, action) => {
    const normalized = normalize(action.payload, schemas.portfolio);
    return {
      ...state,
      portfolios: { ...state.portfolios, ...normalized.entities.portfolios }
    }
  }

}, initialState)
