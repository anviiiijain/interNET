/**
 *
 * SideLayout
 *
 */
import { Link } from "react-router-dom";

import { ReactComponent as DashboardIcon } from "../../assets/dashboardicon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profileicon.svg";
import { ReactComponent as StudentIcon } from "../../assets/studenticon.svg";
import { ReactComponent as ReportIcon } from "../../assets/reporticon.svg";
import { ReactComponent as SubmissionsIcon } from "../../assets/submissionsicon.svg";
import { ReactComponent as CompaniesIcon } from "../../assets/companiesicon.svg";
import { ReactComponent as FaqIcon } from "../../assets/faqicon.svg";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as LogoutIcon } from "../../assets/Logout.svg";
import { CustomButton } from "./CustomButton";
import { authActions } from "../../features/authSlice";
import { useDispatch } from "react-redux";

export function SideMenu() {
  const dispatch = useDispatch();
  const { signOutUser } = authActions;

  return (
    <div className="w-full h-full flex flex-col gap-16 py-20 text-white">
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
      <Link to="/login" className="mx-auto">
        <CustomButton size="xl" onClick={() => dispatch(signOutUser())}>
          <span className="flex gap-3">
            <LogoutIcon />
            Logout
          </span>
        </CustomButton>
      </Link>
    </div>
  );
}
