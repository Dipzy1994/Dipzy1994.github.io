import React from 'react';

// Button component: A reusable button component with customizable text and onClick function
const Button = ({ text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
