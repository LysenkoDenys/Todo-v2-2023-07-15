import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = (props) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form className={styles.wrapper} onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={text}
          className={styles.input}
          placeholder="Enter new todo"
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit" title="Add Todo">
          Submit
        </Button>
        {/* <Button type="submit" title="Edit Todo">
          Apply
        </Button> */}
      </form>
    </div>
  );
};

export default TodoForm;
