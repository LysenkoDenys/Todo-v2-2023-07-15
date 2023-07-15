import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

const TodosActions = (props) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={props.resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={props.deleteCompletedTodos}
        disabled={!props.completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
