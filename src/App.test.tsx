import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Started working with GCP', () => {
  render(<App />);
  const item = screen.getByText(/Started working with GCP/i);

  expect(item).toBeInTheDocument();
});
