import React from "react";

function Modal({ children, isOpen, className = "" }) {
  const dialogRef = React.useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>
  );
}

export default Modal;
