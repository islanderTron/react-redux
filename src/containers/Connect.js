import React from 'react';
import { connect } from 'react-redux';

function Connect({ props }) {
  // console.log("check if there is any value in props: ");
  // console.log(props);

  return <p>Test: {props}</p>
}

function mapStateToProps(state) {
  // console.log(state.counter)
  return {
    test: state.counter
  };
}

export default connect(mapStateToProps)(Connect);