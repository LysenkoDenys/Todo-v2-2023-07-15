import React from 'react';
import {
  RiDeleteBin2Line,
  RiRefreshLine,
  RiSortDesc,
  RiSortAsc,
  RiListCheck3,
} from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

const TodosActions = (props) => {
  console.log(props); //
  return (
    <div className={styles.todosActionsContainer}>
      {/*   //!==================================== */}
      <Button title="Rearrange Asc/Desc Todos" onClick={props.rearrangeTodos}>
        {props.isDescending ? <RiSortDesc /> : <RiSortAsc />}
      </Button>

      <Button
        title="Sort Done Todos"
        onClick={props.sortDoneTodos}
        disabled={!props.completedTodosExist}
      >
        <RiListCheck3 />
      </Button>
      {/*   //!==================================== */}
      <Button title="Reset Todos" onClick={props.resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={props.deleteCompletedTodos}
        disabled={!props.completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
