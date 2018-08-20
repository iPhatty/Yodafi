import React from 'react';
import { mount } from 'enzyme';

import App from '../app';

let wrapped;
beforeEach(() => {
  wrapped = mount(<App />);
});

test('jest is working', () => {
  expect(1).toBe(1);
});

it('renders an app component', () => {
  // There is one App component
  expect(wrapped.find(App).length).toEqual(1);
});
