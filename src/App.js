import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList.js";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    if (text.length) {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        todos={todos}
      />
      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount}
          ${completedTodosCount > 1 ? "todos" : "todo"}`}
        </h2>
      )}
    </div>
  );
}

export default App;
