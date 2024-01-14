import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList.js';
import TodosActions from './components/Todos/TodosActions';
// import formattedDate from './utils/dateFormat.js';
// import Modal from './components/UI/Modal.jsx';

function App() {
  //!====================================
  //get TODO items from localStorage:
  const getStorageItems = () =>
    JSON.parse(localStorage.getItem('textTODO')) || [];
  //!====================================
  const [todos, setTodos] = useState(getStorageItems());
  // const [isDescending, setIsDescending] = useState(false);
  const [isSortAscending, setIsSortAscending] = useState(true);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: `${todos.length + 1}. ${text}`,
      date0: new Date(Date.now()),
      date1: null,
      duration: null,
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
  //!-----------------------------------------------------------------------------------------

  const toggleTodoHandler = (id) => {
    const currentDate = new Date(Date.now());
    console.log(currentDate); //
    // setTodos(
    //   todos.map((todo) =>
    //     id === todo.id
    //       ? {
    //           ...todo,
    //           isCompleted: !todo.isCompleted,
    //           date1: new Date(Date.now()),
    //           duration: (
    //             (new Date(todo.date1) - new Date(todo.date0)) /
    //             (1000 * 60 * 60)
    //           ).toFixed(2),
    //         }
    //       : { ...todo }
    //   )
    // );
    // //!====================================
    // localStorage.clear();
    // localStorage.setItem(
    //   'textTODO',
    //   JSON.stringify(
    //     todos.map((todo) =>
    //       id === todo.id
    //         ? {
    //             ...todo,
    //             isCompleted: !todo.isCompleted,
    //             date1: new Date(Date.now()),
    //             duration: (
    //               (new Date(todo.date1) - new Date(todo.date0)) /
    //               (1000 * 60 * 60)
    //             ).toFixed(2),
    //           }
    //         : { ...todo }
    //     )
    //   )
    // );
    //!====================================
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        id === todo.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              date1: currentDate,
              duration: (
                (currentDate - new Date(todo.date0)) /
                (1000 * 60 * 60)
              ).toFixed(2),
            }
          : { ...todo }
      );

      localStorage.clear();
      localStorage.setItem('textTODO', JSON.stringify(updatedTodos));

      return updatedTodos;
    });
  };

  //!-----------------------------------------------------------------------------------------

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
  // const rearrangeTodosHandler = () => {
  //   setTodos([...todos].reverse());
  //   setIsDescending((prevIsDescending) => !prevIsDescending);
  //   localStorage.clear();
  //   localStorage.setItem('textTODO', JSON.stringify(todos));
  // };
  //!====================================

  //!====================================
  const sortDoneTodosHandler = () => {
    // setTodos(
    //   [...todos].sort((a, b) =>
    //     isSortAscending
    //       ? a.isCompleted - b.isCompleted
    //       : b.isCompleted - a.isCompleted
    //   )
    // );
    // setIsSortAscending(!isSortAscending);
    // localStorage.clear();
    // localStorage.setItem('textTODO', JSON.stringify(todos));

    setTodos((prevTodos) => {
      const sortedTodos = [...prevTodos].sort((a, b) =>
        isSortAscending
          ? a.isCompleted - b.isCompleted
          : b.isCompleted - a.isCompleted
      );

      localStorage.clear();
      localStorage.setItem('textTODO', JSON.stringify(sortedTodos));

      return sortedTodos;
    });

    setIsSortAscending(!isSortAscending);
  };
  //!====================================

  //!====================================
  const editTodoHandler = (id) => {
    const itemToEdit = todos.find((todo) => id === todo.id);
    console.log(itemToEdit); //
    // localStorage.clear();
    // localStorage.setItem('textTODO', JSON.stringify(todos));
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
          // isDescending={isDescending}
          // rearrangeTodos={rearrangeTodosHandler}
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
        editTodo={editTodoHandler}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        todos={todos}
      />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
