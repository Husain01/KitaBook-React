import React, { useEffect, useState } from "react";
import { CartState } from "../../context/Context";
import "./Toast.css";

export const Toast = () => {
  const {
    state: { toastContext },
    dispatch,
  } = CartState();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...toastContext]);
  }, [toastContext]);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (list.length && toastContext.length) {
        if (toastContext[0].toastContent) {
          deleteToast();
        }
      }
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, [toastContext, list]);

  const deleteToast = () => {
    dispatch({
      type: "EMPTY_TOAST",
    });
  };

  return (
    <>
      {list.map((toast, i) => {
        return (
          <div key={i} className="toast normal-shadow">
            <span></span>
            <p>{toast.toastContent}</p>
          </div>
        );
      })}
    </>
  );
};
