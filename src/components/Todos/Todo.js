import React from 'react';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${
        props.todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.item}>{props.todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => props.deleteTodo(props.todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => {
          props.toggleTodo(props.todo.id);
        }}
      />
    </div>
  );
};

export default Todo;
