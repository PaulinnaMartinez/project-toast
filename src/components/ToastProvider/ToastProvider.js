import React, { Children } from 'react';

export const ToastContext = React.createContext();


function ToastProvider({ children }) {

  const [toasties, setToasties] = React.useState([]);

  const handleToasties = (id) => {

    const newToasties = toasties.filter(toast => {
      return toast.id !== id;
    })

    setToasties(newToasties);
  }

  const addToast = (variant, text) => {
    event.preventDefault();

    const newToast = {
      variant,
      text,
      id: crypto.randomUUID()
    }

    let newToasties = [...toasties, newToast]

    setToasties(newToasties);

  }

  return (
    <ToastContext.Provider value={{ handleToasties, addToast, toasties }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
