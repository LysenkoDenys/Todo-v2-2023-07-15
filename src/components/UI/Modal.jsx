import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, onSubmit, onCancel, onClose }) => {
  return (
    <div
      className={styles.modalContainer}
      onClick={(event) => {
        if (event.target.className === styles.modalContainer) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p
            className={styles.close}
            onClick={() => onClose('cancel')}
            title="Close the window"
            tabIndex="0"
          >
            &times;
          </p>
        </div>
        <div className={styles.modalContent}>
          <h3>{children}</h3>
        </div>
        <div className={styles.modalFooter}>
          <button
            className={styles.button1}
            onClick={() => onSubmit('submit')}
            title="Delete all the tasks"
            tabIndex="0"
          >
            Yes
          </button>
          <button
            className={styles.button2}
            onClick={() => onCancel('cancel')}
            title="Do not delete all the tasks"
            tabIndex="0"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
