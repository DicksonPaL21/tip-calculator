import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, ...props }) => {
  const buttonProps = {
    onClick,
    className: 'btn',
    ...props,
  };

  return <button {...buttonProps}>{text}</button>;
};

export default Button;
