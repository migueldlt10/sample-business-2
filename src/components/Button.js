import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const styles = ["btn-primary", "btn-outline"];
  const sizes = ["btn-medium", "btn-large"];

  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to="/payment" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
