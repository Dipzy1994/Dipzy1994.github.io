import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders NavMenu component', () => {
  render(<App />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});

