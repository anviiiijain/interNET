/**
 *
 * Avator
 *
 */
import React from "react";
import cx from "classnames";

//    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';

export function Avatar(props) {
  const { className, imageUrl, size = "md" } = props;
  return (
    <>
      <img
        className={cx(
          {
            "w-8 h-8": size === "xxs",
            "w-12 h-12": size === "xs",
            "w-16 h-16": size === "sm",
            "w-20 h-20": size === "md",
            "w-24 h-24": size === "lg",
            "w-28 h-28": size === "xl",
            "w-32 h-32": size === "xxl",
            "w-36 h-36": size === "xxxl",
            "w-40 h-40": size === "xxxxl",
          },
          "rounded-full",
          className
        )}
        alt="avatar"
        src={imageUrl}
      />
    </>
  );
}
