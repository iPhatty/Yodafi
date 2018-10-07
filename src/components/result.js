import React from 'react';
import { connect } from 'react-redux';

const Result = ({ result }) => {
  return <div>{result}</div>;
};

const mapStateToProps = state => {
  return { result: state.yodaQuote };
};

export default connect(
  mapStateToProps,
  null
)(Result);
