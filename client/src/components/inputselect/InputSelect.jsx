import React from 'react';
import './inputselect.scss';

export const InputSelect = ({ name, value, label, type, onChange }) => {
  return (
    <div className="inputContainer">
      <input
        id={name}
        type={type}
        className="input"
        placeholder={label}
        name={name}
        onChange={onChange}
        value={value}
      /> 
      <label className="checkLabel" htmlFor={name}></label>
    </div>
  );
};
