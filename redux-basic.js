const redux = require('redux')
const createStore = redux.createStore;

const initalState = {
  counter: 0
}

// Reducer 
const rootReducer = (state = initalState, action) => {
  if(action.type === 'INC_COUNTER') {
    console.log(state)
    return {
      ...state,
      counter: state.counter  + 1
    };
  }

  if(action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscribe]', store.getState());
})

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
console.log(store.getState());