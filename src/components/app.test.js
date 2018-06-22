import React from 'react';
import { renderIntoDocument, cleanup, fireEvent } from 'react-testing-library';
// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test('jest is working', () => {
  expect(1).toBe(1);
});
