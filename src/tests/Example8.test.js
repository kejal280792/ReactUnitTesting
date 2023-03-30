import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Example8 from '../Examples/Example8';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(<Example8 />, container);
  });
  expect(container.textContent).toBe('Hey, stranger');

  act(() => {
    render(<Example8 name="Jenny" />, container);
  });
  expect(container.textContent).toBe('Hello, Jenny!');

  act(() => {
    render(<Example8 name="Margaret" />, container);
  });
  expect(container.textContent).toBe('Hello, Margaret!');
});
