/**
 *
 * Layout
 *
 */
import React, { useState } from "react";
import cx from "classnames";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SideMenu } from "./SideMenu";
import { useSelector } from "react-redux";

export function Layout(props) {
  const auth = useSelector((state) => state.auth);
  const { children } = props;
  const [isSideLayoutOpen, setIsSideLayoutOpen] = useState(true);
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  if (
    auth.user?.roles?.includes("mentor") ||
    auth.user?.roles?.includes("admin")
  ) {
    return (
      <div className="flex relative">
        <div
          className={cx(
            {
              hidden: !isSideLayoutOpen,
            },
            "w-1/4 h-screen bg-primary fixed"
          )}
        >
          <SideMenu />
        </div>
        <div className="w-3/4 fixed absolute right-0">
          {/* MAIN */}
          <div className="pt-10 md:p-10 md:pt-16">{children}</div>
        </div>
      </div>
    );
  } else
    return (
      <>
        {/* NAVBAR */}
        <Navbar open={isSidebarOpen} isOpen={setIsSideBarOpen} />
        <div
          className={cx({
            "filter blur-sm": isSidebarOpen,
          })}
          onClick={() => {
            return isSidebarOpen ? setIsSideBarOpen(false) : null;
          }}
        >
          {/* MAIN */}
          <div className="p-10 pt-20 md:p-20 md:pt-40">{children}</div>
          {/* FOOTER */}
          <Footer />
        </div>
      </>
    );
}
