Stores are used to maintain redux. Rather than creating multiple files for our store reducers, we will be combining the files (reducers, actions) into one. We will use the ducks convention, which states:

A store…
1. MUST export default a function called reducer()
2. MUST export its action creators as functions
3. MUST have action types in the form app/reducer/ACTION_TYPE
4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

These are the rules of the ducks redux convention. Learn more here: https://github.com/erikras/ducks-modular-redux

We will use a library called redux-actions to control the verbose boilerplate when using redux. With helpers for both handling and creating actions it makes working with an FSA in Redux easier for everyone. Learn more here: https://redux-actions.js.org/

Unlike ducks, we will name our actions as such <NOUN>_<VERB>. We will use redux-actions to create action creators by using createAction(). These action creators will be named as such <verb><Noun>. For our selectors, name our functions as get<Noun>.

For our reducers, we will use redux-actions handleActions() to replace the cumbersome switch statement.

Some additional best practices:
- Do more in action-creators, do less in reducers
  Business logic should be contained in action creators, while reducers should be simple and stupid.
  

More best practices can be found here:
https://github.com/kylpo/react-playbook/blob/master/best-practices/redux.md