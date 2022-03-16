import React from "react";
import "./Input.css";

function Input({
  textLabel,
  textErr,
  inputId,
  labelFor,
  type,
  inputName,
  spanId,
  minLength,
  maxLength }) {

  return (
    <>
      <label className="field__label" for={labelFor}>{textLabel} </label>
      <input className="field__input"  id={inputId} type={type} name={inputName} minLength={minLength} maxLength={maxLength} required />
      <span class="field__txt-error" id={spanId}>{textErr}</span>
    </>
  )
}
export default Input;