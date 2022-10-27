/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import {
  Routes,
  Outlet,
  BrowserRouter,
  Navigate,
  Route,
  useLocation,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import "./index.css";
import { ProfilePage } from "./pages/ProfilePage";
import { Companies } from "./pages/Companies";
import { ContactCommitteePage } from "./pages/ContactCommitteePage";
import { FaqPage } from "./pages/FaqPage";
import { StudentHome } from "./pages/StudentHome";
import { InternshipDetails } from "./pages/InternshipDetails";
import { AddReportDetails } from "./pages/AddReportDetails";
import { AllStudents } from "./pages/AllStudents";
import { ViewAllSubmissions } from "./pages/ViewAllSubmissions";
import { MentorDashboard } from "./pages/MentorDashboard";
import { Unauthorized } from "./pages/Unauthorized";
import { useSelector } from "react-redux";
import { history } from "./history";

const ProtectedRoutes = ({ allowedRoles }) => {
  // let roles = ["admin"];
  const roles = useSelector((state) => state.auth.user.roles);
  console.log(roles, "roles");
  let isLoggedIn = true;
  const location = useLocation();

  return roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route element={<ProtectedRoutes allowedRoles={["student"]} />}>
          <Route path="/" element={<StudentHome />} />
          <Route
            path="/internshipDetails/:type"
            element={<InternshipDetails />}
          />
        </Route>
        <Route element={<ProtectedRoutes allowedRoles={["mentor", "admin"]} />}>
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/add-report" element={<AddReportDetails />} />
          <Route path="/all-students" element={<AllStudents />} />
          <Route path="/students/:studentid" element={<ProfilePage />} />
          <Route path="/all-submissions" element={<ViewAllSubmissions />} />
        </Route>
        <Route
          element={
            <ProtectedRoutes allowedRoles={["student", "mentor", "admin"]} />
          }
        >
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/contact" element={<ContactCommitteePage />} />
        <Route path="/companies/:company" element={<Companies />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
