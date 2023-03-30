import { render, screen, fireEvent } from '@testing-library/react';
import Example6, { replaceCamelWithSpaces } from '../Examples/Example6';

test('Button has correct initial color', () => {
  render(<Example6 />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<Example6 />);

  //get - getByRole & getAllByRole
  //find - findByRole
  //query - queryByRole

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<Example6 />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<Example6 />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<Example6 />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
