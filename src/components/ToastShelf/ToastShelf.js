import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasties, handleToasties }) {
  return (
    <>
      <ol className={styles.wrapper}>
        {toasties.map((item) => {
          if (!item.visible) return null

          return (
            <li key={item.id} className={styles.toastWrapper}>
              <Toast variant={item.variant} handleToasties={handleToasties} id={item.id}>{item.text}</Toast>
            </li>
          );
        })}

      </ol>
    </>
  );
}

export default ToastShelf;
