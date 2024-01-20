import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, onSubmit, onCancel, onClose }) => {
  return (
    <div
      className={styles.modalContainer}
      onClick={(event) => {
        if (event.target.className === 'modalContainer') {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p className={styles.close} onClick={() => onClose('cancel')}>
            &times;
          </p>
        </div>
        <div className={styles.modalContent}>
          <h3>{children}</h3>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.button1} onClick={() => onSubmit('submit')}>
            Yes
          </button>
          <button className={styles.button2} onClick={() => onCancel('cancel')}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
