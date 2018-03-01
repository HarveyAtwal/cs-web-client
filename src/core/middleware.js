import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const configureMiddleware = () => {
  const middlewares = [thunk, promise];
  const logger = createLogger();
  
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return applyMiddleware(...middlewares)
};

export default configureMiddleware();