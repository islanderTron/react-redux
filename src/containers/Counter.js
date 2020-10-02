import React from 'react';
import { connect } from 'react-redux';

function Counter({ ctr, onIncrementCounter, onDecrementCounter }) {

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

  return (
    <div className="redux-counter" style={wrapperStyle}>
      <h1 style={{ fontSize: "45px" }}>Current count: {ctr} </h1>
      <div className="buttons" >
        <button
          style={buttonStyle}
          aria-label='Increment'
          onClick={() => onIncrementCounter()}
        >
          +
        </button>
        <button
          style={buttonStyle}
          aria-label='decrement'
          onClick={() => onDecrementCounter()}
        >
          -
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);