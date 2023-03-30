import { render, fireEvent, screen } from '@testing-library/react';
import Example3 from '../Examples/Example3';

//test block
test('Increments counter', () => {
  // render the component on virtual dom
  render(<Example3 />);

  //select the elements you want to interact with
  const counter = screen.getByTestId('counter');
  const incrementBtn = screen.getByTestId('increment');
  const decrementBtn = screen.getByTestId('decrement');
  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent('1');

  //interact with those elements
  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent('2');

  fireEvent.click(decrementBtn);

  expect(counter).toHaveTextContent('1');
});
