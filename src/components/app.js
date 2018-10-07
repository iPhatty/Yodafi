import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Form from './form';
import Result from './result';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="header header--title">Yodafi</h1>
        <Form />
        <Result />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
