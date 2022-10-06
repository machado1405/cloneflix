import React from "react";
import styles from "./Input.module.css";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
