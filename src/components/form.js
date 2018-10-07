import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuote } from '../actions';

class Form extends Component {
  state = {
    searchTerm: '',
    loading: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    const url = `https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/yoda.json?text=${searchTerm}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const data = JSON.parse(JSON.stringify(json));
        this.props.getQuote(data.contents.translated);
        this.setState({ loading: false });
      })
      .catch(error => {
        const errMsg = 'Something went wrong, please try again later';
        this.props.getQuote(errMsg);
        this.setState({ loading: false });
      });
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
  return bindActionCreators({ getQuote }, dispatch);
};
export default connect(
  null,
  mapDispatchToProps
)(Form);
