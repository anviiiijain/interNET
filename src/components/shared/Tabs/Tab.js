import React from "react";
import cx from "classnames";

//   shape?: 'rectangle' | 'circle' | 'rounded';
//   tabKey: string;
//   activeKey: string;
//   title: ReactNode;
//   updateKey: Function;
//   route?: string;

export function Tab(props) {
  const {
    shape = "rounded",
    tabKey,
    activeKey,
    title,
    updateKey,
    route,
  } = props;
  const tabClasses = cx(
    {
      "rounded-full p-2 w-10 h-10": shape === "circle",
      "rounded-md px-8 py-2 cursor-pointer": shape === "rounded",
      "px-8 py-2 cursor-pointer": shape === "rectangle",
      "bg-primary text-white": tabKey === activeKey,
      "bg-gray-200 text-gray-500": tabKey !== activeKey && shape === "circle",
      "bg-gray-200 hover:bg-primary hover:text-white":
        tabKey !== activeKey && shape !== "circle",
    },
    "font-bold tracking-wide text-center whitespace-nowrap"
  );
  const handleClick = () => {
    shape !== "circle" && updateKey(tabKey, route);
  };
  return (
    <div className={tabClasses} onClick={handleClick}>
      {title}
    </div>
  );
}
