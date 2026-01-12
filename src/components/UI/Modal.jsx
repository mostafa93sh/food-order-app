import React, { useEffect } from "react";

function Modal({ children, isOpen, className = "", onClose }) {
  const dialogRef = React.useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>
  );
}

export default Modal;
