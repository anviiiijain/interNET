/**
 *
 * CustomSelect
 *
 */
import React, { useState } from "react";
import cx from "classnames";
import { ReactComponent as DownArrowIcon } from "../../assets/DownArrowIcon.svg";

//    options: any;
//    placeholder?: string;
//    width?: string;
//    className?: string;
//    value: string;
//    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//    required?: boolean;

export function CustomSelect(props) {
  const {
    placeholder,
    options,
    width = "w-full",
    className,
    value,
    onChange,
    required = false,
  } = props;

  const [dropdownIsOpen, setDropDownIsOpen] = useState(false);

  const handleSelected = (selectedOption) => {
    onChange(selectedOption);
    setDropDownIsOpen(false);
  };

  return (
    <div
      className={cx(
        className,
        width,
        "block relative bg-background rounded-md px-2 py-4 h-full"
      )}
    >
      <div
        onClick={() => setDropDownIsOpen(!dropdownIsOpen)}
        className="cursor-pointer flex items-center justify-between gap-1"
      >
        <input
          className="w-full cursor-pointer border-none bg-background focus:outline-none font-medium"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        <div>
          <DownArrowIcon />
        </div>
      </div>
      {/* DROPDOWN OPTIONS */}
      {dropdownIsOpen && (
        <ul
          className={cx(
            {
              "translate-y-full": !dropdownIsOpen,
              "translate-y-0": dropdownIsOpen,
            },
            "w-full absolute right-0 bg-white p-2 shadow transform transition-translate z-20"
          )}
        >
          {/* DISABLED PLACEHOLDER */}
          <li
            className="px-2 py-4 border-b-2 border-gray-200 cursor-pointer capitalize font-semibold text-gray-300"
            onClick={() => handleSelected("")}
          >
            {placeholder}
          </li>
          {options.map((option) => (
            <li
              onClick={() => handleSelected(option)}
              className="px-2 py-4 border-b-2 border-gray-200 cursor-pointer capitalize font-semibold text-gray-700"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
