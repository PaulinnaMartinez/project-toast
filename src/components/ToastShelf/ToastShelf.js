import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {

  const { toasties, handleToasties } = React.useContext(ToastContext);

  return (
    <>
      <ol className={styles.wrapper}>
        {toasties.map((item) => {
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
