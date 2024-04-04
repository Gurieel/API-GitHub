import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders samurai', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fala Samurai/i);
  expect(linkElement).toBeInTheDocument();
});
