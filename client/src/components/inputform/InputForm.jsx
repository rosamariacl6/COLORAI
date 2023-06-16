import React from 'react'
import "./inputform.scss"

export const InputForm = ({name, value, label, type, onChange}) => {
  return (
    <>
      <div className="inputContainer">
        <input 
          type={type} 
          className="input"
          placeholder=" "
          name={name} 
          onChange={onChange}
          value={value}
          />
        <label 
            htmlFor="" 
            className="label">
            {label}
        </label>
      </div>
    </>
  )
}