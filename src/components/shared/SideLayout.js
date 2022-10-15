/**
 *
 * SideLayout
 *
 */
import React, { useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as DashboardIcon } from "../../assets/dashboardicon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profileicon.svg";
import { ReactComponent as StudentIcon } from "../../assets/studenticon.svg";
import { ReactComponent as ReportIcon } from "../../assets/reporticon.svg";
import { ReactComponent as SubmissionsIcon } from "../../assets/submissionsicon.svg";
import { ReactComponent as CompaniesIcon } from "../../assets/companiesicon.svg";
import { ReactComponent as FaqIcon } from "../../assets/faqicon.svg";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";

export function SideLayout(props) {
  const { children } = props;
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div className="flex relative">
      <div
        className={cx(
          {
            hidden: !isSidebarOpen,
          },
          "w-1/4 h-screen flex flex-col gap-16 py-20 bg-primary text-white fixed"
        )}
      >
        {/* logo */}
        <div>
          <Logo className="w-4/5 px-6" />
        </div>
        {/* navlinks */}
        <ul className="grid w-full font-medium text-xl">
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/mentor-dashboard">
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/profile">
              <ProfileIcon />
              <span>Profile</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/all-students">
              <StudentIcon />
              <span>All Students</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/add-report">
              <ReportIcon />
              <span>Add Report/Assignment</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/all-submissions">
              <SubmissionsIcon />
              <span>View Submissions</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/companies/current">
              <CompaniesIcon />
              <span>Companies</span>
            </Link>{" "}
          </li>
          <li className="py-2 px-5">
            <Link className="flex items-center" to="/faq">
              <FaqIcon />
              <span>FAQs</span>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="w-3/4 fixed absolute right-0">
        {/* MAIN */}
        <div className="pt-10 md:p-10 md:pt-16">{children}</div>
      </div>
    </div>
  );
}
