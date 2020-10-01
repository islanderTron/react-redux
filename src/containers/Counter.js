import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter(props) {
  const test = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const buttonStyle = {
    width: '200px',
    fontSize: '100px',
    backgroundColor: '#1eeace',
    borderRadius: '5px',
    borderColor: '#fff'
  }

  const wrapperStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  function incrementHandler() {
    return dispatch({ type: 'INCREMENT'})
  }

  function decrementHandler() {
    return dispatch({ type: 'DECREMENT' })
  }

  return (
    <div className="redux-counter" style={wrapperStyle}>
      <h1 style={{ fontSize: "45px" }}>Current count: {test} </h1>
      <div className="buttons" >
        <button 
          style={buttonStyle}
          aria-label='Increment' 
          onClick={() => incrementHandler()}>
          +
        </button>
        <button 
            style={buttonStyle}
            aria-label='decrement' 
            onClick={() => decrementHandler()}>
            -
        </button>
      </div>
    </div>
  )
}

export default Counter;