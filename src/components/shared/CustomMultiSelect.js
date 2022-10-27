/**
 *
 * CustomMultiSelect
 *
 */
import React, { useState } from "react";
import cx from "classnames";

//    options: any;
//    placeholder: string;
//    width?: string;
//    className?: string;
//    value: Array<{ id: number; value: string }>;
//    setValue: <array>(value: array) => void;
//    required?: boolean;

export function CustomMultiSelect(props) {
  const {
    placeholder,
    options,
    width = "w-full",
    className,
    value,
    setValue,
    required = false,
  } = props;
  const [searchText, setSearchText] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(options);
  const [require, setRequire] = useState(required && !(value.length > 0));

  // ADDING AN OPTION TO SELECTED LIST
  const addOption = (optionToAdd) => {
    const isRepeated =
      value?.filter((selectedOption) => selectedOption.id === optionToAdd.id)
        .length >= 1;
    !isRepeated && setValue([...value, optionToAdd]);
    setRequire(!(value.length >= 1));
  };

  // REMOVING A SELECTED OPTION
  const removeOption = (option) => {
    setValue(
      value?.filter((selectedOption) => selectedOption.id !== option.id)
    );
    setRequire(!(value.length >= 1));
  };

  // FILTERING OPTION TO SHOW
  const filterOptions = (optionsToFilter, searchText) => {
    if (!searchText) {
      return optionsToFilter;
    }
    return optionsToFilter.filter((optionToSearch) =>
      optionToSearch.value.toLowerCase().includes(searchText)
    );
  };

  // HANDLE SEARCHING
  const handleChange = (e) => {
    setSearchText(e.target.value);
    setVisibleOptions(filterOptions(options, e.target.value));
  };

  return (
    <div
      className={cx(
        "relative focus:outline-none focus:ring focus:border-blue-300",
        width,
        className
      )}
      tabIndex={0}
      onFocus={() => setIsSelectOpen(true)}
      onBlur={() => setIsSelectOpen(false)}
    >
      <div className="cursor-pointer bg-background rounded-md py-1.5 px-2 flex flex-wrap justify-evenly h-full">
        <div className="flex-grow flex justify-between">
          {/* INPUT */}
          <input
            type="text"
            className="border-none w-full bg-background my-2 font-medium focus:outline-none"
            value={searchText}
            onChange={handleChange}
            placeholder={placeholder}
            required={require}
          />
        </div>
        {/* SELECTED LIST */}
        {value?.length >= 1 && (
          <div className="flex flex-wrap">
            {value?.map((selectedOption, i) => (
              <span
                key={i}
                className="p-1 my-1 rounded mr-2 list-none bg-primary text-white font-bold"
              >
                {selectedOption.value}
                <span
                  className="pl-5 pr-2.5 cursor-pointer"
                  onClick={() => {
                    removeOption(selectedOption);
                  }}
                >
                  x
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
      {/* DROPDOWN OPTIONS */}
      {isSelectOpen && (
        <div
          className={cx("z-20 bg-white rounded shadow absolute right-0", width)}
        >
          <ul className="cursor-pointer capitalize font-semibold text-gray-700 p-4">
            {visibleOptions?.map((option, i) => (
              <p
                key={i}
                className="list-none py-4 border-b-2 border-gray-200"
                onClick={() => {
                  addOption(option);
                }}
              >
                {option.value}
              </p>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
