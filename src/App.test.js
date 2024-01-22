import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

test('render heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Todo Manager/i);
  expect(headingElement).toBeInTheDocument();
});

test('render button', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('render input', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

// npm run test App.test.js
