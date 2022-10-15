/**
 *
 * CustomButton
 *
 */
import React from "react";
import cx from "classnames";

//    disabled?: boolean;
//    loading?: boolean;
//    icon?: ReactNode;
//    onClick?: React.MouseEventHandler<HTMLButtonElement>;
//    appearance?: 'filled' | 'outlined';
//    color?: string;
//    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
//    className?: string;
//    children: any;

export function CustomButton(props) {
  const {
    disabled = false,
    loading = false,
    icon,
    onClick,
    appearance = "filled",
    color = "primary",
    size = "md",
    className,
    children,
  } = props;

  const classes = cx(
    {
      "px-8 text-lg": size === "xl",
      "px-6 text-lg": size === "lg",
      "px-5": size === "md",
      "px-3 text-sm": size === "sm",
      "px-2 text-xs ": size === "xs",

      "bg-gray-300 hover:bg-gray-300 focus:bg-gray-300": disabled === true,
      "bg-primary hover:bg-primary-dark focus:bg-primary-dark":
        !disabled && color === "primary" && appearance === "filled",
      "bg-gray-900 hover:bg-black focus:bg-black":
        color === "secondary" && appearance === "filled",
      "text-primary border-primary border-3 hover:bg-primary hover:text-white focus:bg-primary focus:text-white":
        color === "primary" && appearance === "outlined",
      "text-gray-900 border-gray-900 border-3 hover:bg-black hover:text-white focus:bg-black focus:text-white":
        color === "secondary" && appearance === "outlined",
    },
    "text-white py-2 rounded-md font-semibold border-3 flex items-center",
    className
  );

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      <span className="mx-auto whitespace-nowrap">{children}</span>
      {icon && icon}
    </button>
  );
}
