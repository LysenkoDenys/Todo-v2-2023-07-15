import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

describe('render elements', () => {
  test('render heading, button, input', () => {
    render(<App />);

    const headingElement = screen.getByText(/Todo Manager/i);
    expect(headingElement).toBeInTheDocument();

    const button = screen.getByText(/Submit/i);
    expect(button).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    const inputMode = screen.getByPlaceholderText(/Enter new todo/i);
    expect(inputMode).toBeInTheDocument();
    console.log('Actual color:', window.getComputedStyle(button).color);

    expect(input).toMatchSnapshot();
  });
});

test('style', async () => {
  render(<App />);
  const button = await screen.findByText(/Submit/i);
  expect(button).toHaveStyle({
    fontSize: '1.8rem',
    backgroundColor: 'beige',
    fontWeight: '700',
  });
});

// describe('functions', () => {
//   test('functions', () => {
//     render(<App />);
//     expect(resetTodosHandler()).toBe(undefined);
//   });
// });

// describe('events', () => {
//   test('input event', () => {
//     //1. render the component:
//     render(<App />);
//     //2. manipulate the component or find element in it:
//     const input = screen.getAllByRole('textbox');
//     const button = screen.getByText('button');
//     fireEvent.click(button);
//     //3. assertion - make sure the component is doing what we expect it to do:
//     expect(input).toHaveLength(2);
//     expect(button).toBeInTheDocument();
//   });
// });

// npm run test App.test.js
