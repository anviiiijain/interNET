/**
 *
 * Modal
 *
 */
import React from "react";
import cx from "classnames";

//    visible: boolean;
//    hide: Function;
//    children: any;
//    className?: string;
//    width?: string;
//    height?: string;

export function Modal(props) {
  const { visible, hide, children, className, width, height } = props;
  const classes = cx(
    {
      "hidden translate-x-0": !visible,
      "-translate-x-2/4 -translate-y-2/4": visible,
    },
    width ? width : "w-3/5",
    height ? height : "h-3/5",
    "shadow-lg rounded z-50 fixed bg-white top-1/2 left-1/2 transform translate overflow-auto",
    className
  );
  return (
    <>
      {/* OVERLAY */}
      <div
        className={cx(
          {
            "hidden transition-all transform  duration-1000 ease-in-out":
              !visible,
          },
          "z-40 fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm "
        )}
        onClick={() => hide()}
      />
      {/* MODAL */}
      <div className={classes}>{children}</div>
    </>
  );
}
