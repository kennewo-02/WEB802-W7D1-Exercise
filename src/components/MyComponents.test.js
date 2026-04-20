import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders heading', () => {
    render(<MyComponent />);
    expect(screen.getByText('Register Form')).toBeInTheDocument();
  });

  test('renders input and button', () => {
    render(<MyComponent />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});