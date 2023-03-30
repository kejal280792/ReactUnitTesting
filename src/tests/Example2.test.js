import { render, fireEvent, screen } from '@testing-library/react';
import Example2 from '../Examples/Example2';
import { validateName } from '../Examples/Example2';

describe('Validation', () => {
  test('Can set the error if input is number', () => {
    const name = 123;
    const error = validateName(name);
    expect(error).toBeTruthy();
  });
  test('Could reset error if input is empty', () => {
    const name = null;
    const error = validateName(name);
    expect(error).toEqual(false);
  });
  test('Validate proper name', () => {
    const name = 'Vrushali';
    const error = validateName(name);
    expect(error).toEqual(false);
  });
  test('Should render user name component', () => {
    render(<Example2 />);
    const input = screen.getByTestId('content-input');
    fireEvent.change(input, { target: { value: 'Param' } });
    expect(input.value).toBe('Param');
  });
});
