import React, { Component } from 'react';
import { connect } from 'react-redux';

const Result = props => {
  return <div>{props.result}</div>;
};

const mapStateToProps = state => {
  return { result: state.yodaQuote };
};

export default connect(
  mapStateToProps,
  null
)(Result);