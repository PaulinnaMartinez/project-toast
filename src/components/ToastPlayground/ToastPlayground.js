import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState('notice');
  const [text, setText] = React.useState("Mensaje prueba");
  const [visible, setVisible] = React.useState(false);

  function handleVisible() {
    setVisible(false);
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {
        visible && <Toast variant={variant} handleVisible={handleVisible}>
          {text}
        </Toast>
      }

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
                    onClick={() => { setVariant(event.target.value) }}
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
            <Button
              onClick={() => { setVisible(true) }}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
