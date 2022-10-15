/**
 *
 * Tabs
 *
 */
import React, { useState } from "react";
import { Tab } from "./Tab";
import cx from "classnames";
import { history } from "../../../history";

//    shape: 'rectangle' | 'circle' | 'rounded';
//    children: any;
//    defaultKey: string;
//    position?: 'center' | 'left' | 'right';

//    key: string;
//    route?: string;
//    title: ReactNode;
//    children: any;

function TabContent(props) {
  const { children } = props;
  return <>{children}</>;
}

Tabs.TabContent = TabContent;

export function Tabs(props) {
  const { shape, children, defaultKey, position } = props;
  const [activeKey, setActiveKey] = useState(defaultKey);

  const updateKey = (key, route) => {
    setActiveKey(key);
    if (route) {
      history.push(route);
      window.location.reload();
    }
  };
  return (
    <>
      <div
        className={cx(
          {
            "gap-4": shape === "rounded" || shape === "rectangle",
            "gap-20": shape === "circle",
            "justify-center": position === "center",
            "flex-row-reverse": position === "right",
          },
          "flex flex-wrap"
        )}
      >
        {/* TABS */}
        {Array.isArray(children) ? (
          children?.map((child) => (
            <Tab
              shape={shape}
              key={child.key}
              tabKey={child.key}
              activeKey={activeKey}
              title={child.props.title}
              updateKey={updateKey}
              route={child.props.route}
            />
          ))
        ) : (
          <Tab
            shape={shape}
            key={children.key}
            tabKey={children.key}
            activeKey={activeKey}
            title={children.props.title}
            updateKey={updateKey}
            route={children.props.route}
          />
        )}
      </div>
      {/* TAB CONTENT */}
      <div>
        {Array.isArray(children) ? (
          children?.map((child, i) => {
            if (child.key !== activeKey) {
              return null;
            } else {
              return (
                <div key={i} className="w-full p-4">
                  {child.props.children}
                </div>
              );
            }
          })
        ) : (
          <div className="w-full">{children?.props.children}</div>
        )}
      </div>
    </>
  );
}
