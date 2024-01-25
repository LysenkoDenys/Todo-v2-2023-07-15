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

    const information = screen.getByText(/Todo list is empty/i);
    expect(information).toBeInTheDocument();

    expect(input).toMatchSnapshot();
  });
});

describe('functions', () => {
  test('add todo', () => {
    render(<App />);

    const inputTodos = screen.getByRole('textbox');
    expect(inputTodos).toContainHTML('');
    fireEvent.input(inputTodos, { target: { value: '12345' } });
    const buttonSubmit = screen.getByTitle('Add Todo');
    expect(screen.getByRole('textbox')).toContainHTML('12345');
    fireEvent.click(buttonSubmit);
    expect(screen.getByRole('textbox')).toContainHTML('');
    const todoElement = screen.getByText('12345');
    expect(todoElement).toBeInTheDocument();
  });
  test('reset todo', () => {
    render(<App />);

    const inputTodos = screen.getByRole('textbox');
    expect(inputTodos).toContainHTML('');
    fireEvent.input(inputTodos, { target: { value: '12345' } });
    const buttonSubmit = screen.getByTitle('Add Todo');
    expect(screen.getByRole('textbox')).toContainHTML('12345');
    fireEvent.click(buttonSubmit);
    expect(screen.getByTitle('Reset Todos')).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('Reset Todos'));
    expect(
      screen.getByText('Do you want to delete all the tasks?')
    ).toBeInTheDocument();
  });
});

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
