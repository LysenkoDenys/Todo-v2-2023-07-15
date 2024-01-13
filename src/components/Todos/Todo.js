import React from 'react';
import { RiDeleteBin2Line, RiTodoFill, RiDraftLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import formattedDate from '../../utils/dateFormat';

const Todo = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${
        props.todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.item}>
        {props.todo.text}
        <div className={styles.date}>
          {props.todo.isCompleted
            ? `started: ${formattedDate(
                props.todo.date0
              )}   finished: ${formattedDate(props.todo.date1)}   duration: ${(
                (props.todo.date1 - props.todo.date0) /
                (1000 * 60 * 60)
              ).toFixed(2)} hours`
            : `started: ${formattedDate(props.todo.date0)}`}
        </div>
      </div>
      <RiDraftLine
        className={styles.editIcon}
        onClick={() => props.editTodo(props.todo.id)}
      />
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
