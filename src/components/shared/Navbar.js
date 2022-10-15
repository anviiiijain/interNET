/**
 *
 * Navbar
 *
 */
import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { ReactComponent as Logo } from "../../assets/logo-blue.svg";

export function Navbar(props) {
  const { open, isOpen } = props;

  return (
    <div>
      <div
        className={cx(
          "py-4 bg-white shadow-lg transform transition-transform duration-500 ease-in-out md:hidden",
          {
            "-translate-y-full md:translate-y-0": open,
            "translate-y-0": !open,
          }
        )}
      >
        {/* MOBILE VIEW */}
        <div className="flex justify-between items-center w-screen px-10">
          {/* LOGO */}
          <span className="text-xl">
            <Logo />
          </span>
          {/* MENU */}
          <div onClick={() => isOpen(true)}>
            <div className="h-0.5 w-5 bg-black" />
            <div className="h-0.5 w-5 bg-black my-1" />
            <div className="h-0.5 w-5 bg-black" />
          </div>
        </div>
      </div>

      <div
        className={cx(
          "fixed top-0 right-0 bg-white shadow-lg w-4/5 sm:w-3/5 transform transition-transform duration-500 ease-in-out z-40 md:w-screen",
          {
            "translate-x-0": open,
            "translate-x-full md:translate-x-0": !open,
          }
        )}
      >
        <div className="flex flex-col h-screen py-10 tracking-wider md:flex-row md:items-center md:justify-between md:h-auto md:py-0 md:px-10 xl:px-16">
          {/* LOGO */}
          <span className="text-xl mx-6 my-4 py-4 border-b-2 md:m-0 md:border-b-0">
            <Logo className="w-[65%]" />
          </span>
          {/* NAVLIST */}
          <div className="flex flex-col justify-between md:flex-row items-center">
            <Link
              to="/"
              className="p-5 text-xl hover:text-primary cursor-poniter"
            >
              Home
            </Link>
            <Link
              to="/companies/previous"
              className="p-5 text-xl hover:text-primary cursor-poniter"
            >
              Previous Internship
            </Link>
            <Link
              to="/faq"
              className="p-5 text-xl hover:text-primary cursor-poniter"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="p-5 text-xl hover:text-primary cursor-poniter"
            >
              Contact
            </Link>
            <Link to="/login">
              <CustomButton className="m-5">Login</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
