import React, { Component } from 'react';
import { connect } from 'react-redux';

const Result = props => {
  const { result } = props;
  return (
    <div>
      {result.contents === undefined ? 'search!' : result.contents.translated}
    </div>
  );
};

const mapStateToProps = state => {
  return { result: state.yodaQuote };
};

export default connect(
  mapStateToProps,
  null
)(Result);
