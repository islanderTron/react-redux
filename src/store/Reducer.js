const initialState = {
  counter: 222
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
      default:
        return state
  }
}

export default reducer;