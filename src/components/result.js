import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';

const ResultMsg = posed.span({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Result = ({ quote }) => {
  return (
    <div className="result result--container">
      <ResultMsg
        className="result--content"
        pose={quote.length > 0 ? 'visible' : 'hidden'}
      >
        {quote}
      </ResultMsg>
    </div>
  );
};

const mapStateToProps = state => {
  return { quote: state.yodaQuote.quote };
};

export default connect(
  mapStateToProps,
  null
)(Result);
