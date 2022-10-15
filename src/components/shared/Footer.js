/**
 *
 * Footer
 *
 */
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      {/* CTA */}
      <div className="flex flex-col md:flex-row items-center justify-evenly lg:gap-10 my-20 lg:my-10 ">
        <div className="font-bold">
          <p className="text-3xl md:text-4xl my-2 text-gray-800">
            Have some questions?
          </p>
          <p className="text-2xl md:text-3xl my-4 text-gray-800">
            We'll help you here!
          </p>
        </div>
        <div className="flex items-center shadow-md rounded-lg w-11/12 sm:w-3/5 md:w-7/12 lg:w-2/5 p-5 lg:px-10 font-medium">
          <div>
            <p className="text-xs text-gray-400">EMAIL US HERE!</p>
            {/* EMAIL */}
            <a
              href="mailto:anvijain250102@gmail.com"
              className="text-xl md:text-2xl text-gray-800 mb-4"
            >
              internship2021@svvv.edu.in
            </a>
          </div>
        </div>
      </div>
      {/* INFORMATION */}
      <div className="flex flex-col justify-evenly items-center py-10 md:py-20 bg-gray-800 md:flex-row">
        <div>
          <span className="text-white text-2xl my-10 md:mt-0">SVVV</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white text-lg sm:text-xl tracking-widest px-5 pt-10 md:p-0">
          <div>
            <span className="text-xl sm:text-2xl mb-4 font-semibold uppercase">
              Support
            </span>
            <div className="grid">
              <Link to="/faq" className="my-4">
                FAQ
              </Link>
              <Link to="contact" className="my-4">
                Report
              </Link>
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-2xl mb-4 font-semibold uppercase">
              Formats
            </span>
            <div className="grid">
              <Link to="/" className="my-4">
                Internal Assignment
              </Link>
              <Link to="/" className="my-4">
                Fortnightly Report
              </Link>
              <Link to="/" className="my-4">
                Late Submission
              </Link>
            </div>
          </div>
          <div className="sm:ml-10 lg:ml-20">
            <span className="text-xl sm:text-2xl mb-4 font-semibold uppercase">
              Companies
            </span>
            <div className="grid">
              <Link to="/companies/previous" className="my-4">
                Previous Year
              </Link>
              <Link to="companies/current" className="my-4">
                Current Year
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* DEVELOPERS */}
      <div className="py-5 text-center font-semibold tracking-wide">
        <p className="my-1">Copyright 2021 | All rights reserved</p>
        {/* <p className="my-1">
           Developed by&nbsp;
           <a
             className="text-primary"
             href="https://github.com/Aman0802"
             target="_blank"
             rel="noreferrer"
           >
             Aman Khubani
           </a>
           &nbsp;and&nbsp;
           <a
             className="text-primary"
             href="https://github.com/anviiiijain"
             target="_blank"
             rel="noreferrer"
           >
             Anvi Jain
           </a>
         </p> */}
      </div>
    </>
  );
}
