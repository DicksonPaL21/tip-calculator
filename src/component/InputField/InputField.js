import React from 'react';
import './InputField.scss';

const InputField = ({ text, value, pattern, ...props }) => {
  const onChange = (e) => {
    let value = e.target.value;
    if (pattern) value = value.replace(pattern, '');
    props.onChange(value);
  };

  const inputProps = {
    value,
    onChange,
    className: 'number-input',
  };

  return (
    <div className="input-field">
      <div className="title">{text}</div>
      <input {...inputProps} />
    </div>
  );
};

export default InputField;
