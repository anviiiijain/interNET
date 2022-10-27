/**
 *
 * FormGenerator
 *
 */
import React from "react";
import cx from "classnames";
import { CustomInput } from "./CustomInput";
import { CustomMultiSelect } from "./CustomMultiSelect";
import { CustomButton } from "./CustomButton";
import { CustomSelect } from "./CustomSelect";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//    formSchema: any;
//    onSubmit: any;
//    formHeading?: string;
//    labelAlign?: 'left' | 'right';
//    formLayout?: 'horizontal' | 'vertical' | 'inline';
//    gap?: string;

export function FormGenerator(props) {
  const {
    formSchema,
    onSubmit,
    labelAlign = "left",
    formHeading,
    formLayout = "vertical",
    gap = "gap-y-4",
  } = props;

  const getFormElement = (elementSchema) => {
    let props;
    if (
      elementSchema.type === "text" ||
      elementSchema.type === "email" ||
      elementSchema.type === "password" ||
      elementSchema.type === "date" ||
      elementSchema.type === "number"
    ) {
      props = {
        className: elementSchema.className,
        placeholder: elementSchema.placeholder,
        value: elementSchema.value,
        type: elementSchema.type,
        onChange: elementSchema.onChange,
        required: elementSchema.required,
        defaultValue: elementSchema.defaultValue,
      };
      return <CustomInput {...props} />;
    }

    if (elementSchema.type === "select") {
      props = {
        width: elementSchema?.width,
        options: elementSchema.options,
        className: elementSchema?.className,
        placeholder: elementSchema.placeholder,
        value: elementSchema.value,
        type: elementSchema?.type,
        onChange: elementSchema.onChange,
        required: elementSchema.required,
      };
      return <CustomSelect {...props} />;
    }

    if (elementSchema.type === "multiselect") {
      props = {
        className: elementSchema?.className,
        placeholder: elementSchema.placeholder,
        options: elementSchema.options,
        width: elementSchema?.width,
        value: elementSchema.value,
        setValue: elementSchema.setValue,
        required: elementSchema.required,
      };
      return <CustomMultiSelect {...props} />;
    }

    if (elementSchema.type === "editor") {
      props = {
        // width: elementSchema?.width,
        // options: elementSchema.options,
        className: elementSchema?.className,
        placeholder: elementSchema.placeholder,
        value: elementSchema.value,
        onChange: elementSchema.onChange,
        required: elementSchema.required,
      };
      return (
        <ReactQuill
          {...props}
          theme="snow"
          className="focus:outline-none focus:ring focus:border-blue-300 rounded-md w-full mb-10"
        />
      );
    }

    if (elementSchema.type === "button") {
      props = {
        className: elementSchema.className,
        onClick: elementSchema.onClick,
        text: elementSchema.text,
        disabled: elementSchema.disabled,
        loading: elementSchema.loading,
        appearance: elementSchema.appearance,
        color: elementSchema.color,
        size: elementSchema.size,
        icon: elementSchema.icon,
      };
      return <CustomButton {...props}>{props.text}</CustomButton>;
    }
  };

  return (
    <div>
      {formHeading && (
        <h1 className="text-2xl font-bold text-wider my-5">{formHeading}</h1>
      )}
      <form
        onSubmit={onSubmit}
        className={cx(gap, "flex flex-wrap item-center justify-center")}
      >
        {/* FORM ELEMENTS */}
        {Object.keys(formSchema)?.map((key, ind) => (
          <div
            key={key}
            className={cx(
              {
                "flex flex-col": formLayout === "vertical",
                "flex justify-between": formLayout === "horizontal",
                flex: formLayout === "inline",
              },
              gap,
              formSchema[key].width,
              "whitespace-nowrap p-2"
            )}
          >
            {/* ELEMENT LABEL */}
            {formSchema[key].label && (
              <h4
                className={cx(
                  {
                    "text-left": labelAlign === "left",
                    "text-right": labelAlign === "right",
                  },
                  "flex-grow-0 py-2"
                )}
              >
                <span className="font-semibold tracking-wider text-lg">
                  {formSchema[key].label}:
                </span>
              </h4>
            )}
            {/* GETTING FORM ELEMENT */}
            {getFormElement(formSchema[key])}
          </div>
        ))}
      </form>
    </div>
  );
}
