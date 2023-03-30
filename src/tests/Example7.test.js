import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Example7 from '../Examples/Example7';

test('Shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message';
  render(<Example7>{testMessage}</Example7>);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull();

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
