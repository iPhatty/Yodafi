import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

class Form extends Component {
  state = {
    searchTerm: '',
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.getQuote(searchTerm);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="May the force be with you..."
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button className="button" type="submit" disabled={this.state.loading}>
          {this.state.loading ? 'Loading' : 'Submit'}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuote: searchTerm => dispatch(getQuote(searchTerm))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
