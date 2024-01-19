import React, { useState, useEffect, useRef } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = (props) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //prevent to enter just spaces:
    if (text.trim() !== '') {
      props.addTodo(text);
      setText('');
    }
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
          ref={inputRef}
        />
        {!props.inputText ? (
          <Button type="submit" title="Add Todo">
            Submit
          </Button>
        ) : (
          <Button type="submit" title="Edit Todo">
            Apply
          </Button>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
