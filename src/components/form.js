import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getQuote } from '../actions';

const StyledForm = styled.form`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.2rem;
  border: none;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #1d1d1d;
  color: #efefef;
`;

class Form extends Component {
  state = {
    searchTerm: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getQuote(this.state.searchTerm);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="May the force be with you..."
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
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
