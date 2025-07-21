import React from "react";
import "./button.css";


function Button({ children, onClick, type = "button", styleType = "default", ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${styleType}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
