import React from "react";
import styles from "./Button.module.css";

// we destructuring the props in the functional component parameters:
const Button = (props) => {
  const { children, disabled = false } = props;
  return (
    <>
      <button {...props} className={styles.button} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
