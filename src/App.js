import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList.js';
import TodosActions from './components/Todos/TodosActions';
import Modal from './components/UI/Modal.jsx';

function App() {
  //!====================================
  //get TODO items from localStorage:
  const getStorageItems = () =>
    JSON.parse(localStorage.getItem('textTODO')) || [];
  //!====================================
  const [todos, setTodos] = useState(getStorageItems());
  const [isDescending, setIsDescending] = useState(false);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: `${text} /${new Date(Date.now()).toLocaleString()}`,
      isCompleted: false,
      id: uuidv4(),
    };
    if (text.length) {
      setTodos([...todos, newTodo]);
      //!====================================
      localStorage.setItem('textTODO', JSON.stringify([...todos, newTodo]));
      //!====================================
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
    //!====================================
    localStorage.clear();
    localStorage.setItem(
      'textTODO',
      JSON.stringify(todos.filter((todo) => id !== todo.id))
    );
    //!====================================
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
    //!====================================
    localStorage.clear();
    localStorage.setItem(
      'textTODO',
      JSON.stringify(
        todos.map((todo) =>
          id === todo.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : { ...todo }
        )
      )
    );
    //!====================================
  };

  const resetTodosHandler = () => {
    setTodos([]);
    //!====================================
    localStorage.clear();
    //!====================================
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
    //!====================================
    localStorage.clear();
    localStorage.setItem(
      'textTODO',
      JSON.stringify(todos.filter((todo) => !todo.isCompleted))
    );
    //!====================================
  };

  //!====================================
  const rearrangeTodosHandler = () => {
    setTodos([...todos].reverse());
    setIsDescending((prevIsDescending) => !prevIsDescending);
    localStorage.clear();
    localStorage.setItem('textTODO', JSON.stringify(todos));
  };
  //!====================================

  //!====================================
  const sortDoneTodosHandler = () => {
    setTodos([...todos].sort((a, b) => a.isCompleted - b.isCompleted));
    localStorage.clear();
    localStorage.setItem('textTODO', JSON.stringify(todos));
  };
  //!====================================

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo Manager</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          isDescending={isDescending}
          rearrangeTodos={rearrangeTodosHandler}
          sortDoneTodos={sortDoneTodosHandler}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount}
            ${completedTodosCount > 1 ? 'todos' : 'todo'}`}
        </h2>
      )}
      <TodoList
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        todos={todos}
      />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
