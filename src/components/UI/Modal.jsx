import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <h3>Are you sure?</h3>
      <button className={styles.button1}>Yes</button>
      <button className={styles.button2}>No</button>
    </div>
  );
};

export default Modal;
