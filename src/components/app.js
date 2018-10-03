import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.color || '#6ab04c'};
`;
class App extends Component {
  render() {
    return <Title>Yodafi</Title>;
  }
}

export default hot(module)(App);
