import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import Form from './form';

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.color || '#6ab04c'};
`;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Yodafi</Title>
        <Form />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
