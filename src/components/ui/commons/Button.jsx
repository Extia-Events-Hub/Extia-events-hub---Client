import React from "react";

function Button({ children, type, className, onClick, disabled }) {
  return (
    <button
      type={type}
      className={
        "btn bg-primary text-white font-bold hover:border-primary font-mulish  hover:bg-transparent hover:text-primary shadow-lg " +
        " " +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
