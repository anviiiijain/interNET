/**
 *
 * Card
 *
 */
import React from "react";
import cx from "classnames";

export function Card(props) {
  const { children, className, shadow, height, width } = props;

  const classes = cx(
    shadow ? shadow : "shadow-lg",
    height ? height : "h-full",
    width ? width : "w-full",
    "overflow-hidden rounded relative bg-white flex flex-col",
    className
  );

  return (
    <div className={classes}>
      <div>{children}</div>
    </div>
  );
}
