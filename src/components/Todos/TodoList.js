import React from 'react';
import Todo from './Todo';
import styles from './TodoLIst.module.css';

const TodoList = (props) => {
  return (
    <div className={styles.todoListContainer}>
      {!props.todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={props.editTodo}
            deleteTodo={props.deleteTodo}
            toggleTodo={props.toggleTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
