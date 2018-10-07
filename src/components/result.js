import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';

const ResultMsg = posed.span({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Result = ({ result }) => {
  return (
    <div className="result result--container">
      <ResultMsg
        className="result--content"
        pose={result.length > 0 ? 'visible' : 'hidden'}
      >
        {result}
      </ResultMsg>
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
