import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [text, setText] = React.useState("");
  const { addToast } = React.useContext(ToastContext);

  function add() {
    addToast(variant, text);
    setText("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={() => add()}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={text} onChange={() => { setText(event.target.value) }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => {

                const btnName = `variant-${option}`;

                return (
                  <label key={option} htmlFor={btnName}>
                    <input
                      id={btnName}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === variant}
                      onChange={() => { setVariant(event.target.value) }}
                    />
                    {option}
                  </label>
                )
              })
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
