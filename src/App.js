/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Routes, Route, BrowserRouter } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<StudentHome />} />
        <Route path="/contact" element={<ContactCommitteePage />} />
        <Route path="/companies/:company" element={<Companies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/internshipDetails/:type"
          element={<InternshipDetails />}
        />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/add-report" element={<AddReportDetails />} />
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/students/:studentid" element={<ProfilePage />} />
        <Route path="/all-submissions" element={<ViewAllSubmissions />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
