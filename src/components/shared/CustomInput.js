/**
 *
 * CustomInput
 *
 */
import React from "react";
import cx from "classnames";

//    width?: string;
//    placeholder?: string;
//    className?: string;
//    value: string | number;
//    type?: 'email' | 'text' | 'password';
//    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//    required?: boolean;

export function CustomInput(props) {
  const {
    placeholder,
    className,
    value,
    type = "text",
    onChange,
    required = false,
  } = props;
  return (
    <>
      <input
        className={cx(
          className,
          "focus:outline-none focus:ring focus:border-blue-300 rounded-md bg-background px-2 py-3 w-full"
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
