import React from 'react';
import { render, screen } from '@testing-library/react';
import Example1 from '../Examples/Example1';

describe('DisplayName', () => {
  test('Should render Vrushali', () => {
    render(<Example1 name={'Vrushali'} />);
    const linkElement = screen.getByText(/Welcome Vrushali/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// screen.getByText() - Find element by display text
// /Welcome Vrushali/i - regular expression
//                     - case insensitive
//                     - could be string 'Welcome Vrushali'
