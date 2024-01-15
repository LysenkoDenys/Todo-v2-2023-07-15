import React, { useState, useEffect } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = (props) => {
  const [text, setText] = useState('');

  // console.log(props.editTodo()); //
  // !==============================================================================
  // useEffect(() => {
  //   // Update the text state when the todo being edited changes
  // const editedTodo = props.editTodo();

  //   console.log('editedTodo:', editedTodo);

  //   if (editedTodo && editedTodo.text !== undefined) {
  //     setText(editedTodo.text);
  //   } else {
  //     setText('');
  //   }
  // }, [props.editTodo]);
  // !==============================================================================

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //prevent to enter just spaces:
    if (text.trim() !== '') {
      props.addTodo(text);
      setText('');
    }
  };

  console.log(text); //

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
