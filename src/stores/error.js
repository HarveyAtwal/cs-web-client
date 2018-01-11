import { createAction, handleActions } from 'redux-actions';

let id = 0;

function InternalAppError(error) {
  this.name = "InternalAppError"
  this.id = id++;
  
  const { type, il8n, message } = error;
  this.il8n = il8n;
  this.message = message;
  this.type = type;
}
InternalAppError.prototype = Error.prototype;

//- Action types
const ERROR = "ERROR"
const ERROR_SHOWN = "ERROR_SHOWN"

//- Actions
export const errorShown = createAction(ERROR_SHOWN)
export const error = createAction(ERROR, (error) => (
  new InternalAppError(error)
))


//- State
const initialState = []

//- Reducers
export default handleActions({
  ERROR: (state, action) => ([
    ...state,
    action.payload,
  ]),
  
  ERROR_SHOWN: (state, action) => {
    return ([
      ...state.filter(error => (error.id !== action.payload.id))
    ])
  },
    
}, initialState)

//- Selectors