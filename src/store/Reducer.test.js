import reducer from './Reducer';
// Render part 
import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import Counter from '../containers/Counter';

describe('counter reducer', () => {
  it('should return the inital state', () => {
    const initalState = { counter: 222 }
    expect(reducer(undefined, {})).toEqual(initalState);
  })

  it('should return the increment state', () => {
    const action = { type: 'INCREMENT' };
    const newState = { counter: 223 }
    expect(
      reducer(
        undefined,
        action
      )).toEqual(
        newState
      )
  })

  it('should return the decrement state', () => {
    const action = { type: 'DECREMENT' };
    const newState = { counter: 221 }
    expect(
      reducer(
        undefined,
        action
      )).toEqual(newState)
  })

  // Hold on to this for render part
  // it('Renders the connected app with initialState', () => {

  //   render(<Counter />, { initialState: { ctr: 222 } })
  //   expect(screen.getByText(/redux ctr/)).toBeInTheDocument()
  // })
})