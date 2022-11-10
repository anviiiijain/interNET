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
import jwt from "jwt-decode";
import { LoginPage } from "./pages/LoginPage";
import "./index.css";
import { ProfilePage } from "./pages/ProfilePage";
import { Companies } from "./pages/Companies";
import { ContactCommitteePage } from "./pages/ContactCommitteePage";
import { FaqPage } from "./pages/FaqPage";
import { StudentHome } from "./pages/StudentHome";
import { InternshipDetails } from "./components/InternshipDetailModal/InternshipDetails";
import { AddReportDetails } from "./pages/AddReportDetails";
import { AllStudents } from "./pages/AllStudents";
import { ViewAllSubmissions } from "./pages/ViewAllSubmissions";
import { MentorDashboard } from "./pages/MentorDashboard";
import { Unauthorized } from "./pages/Unauthorized";
import { history } from "./history";
import { ACCESS_TOKEN_KEY } from "./constants/accessTokenKey";
import { CompanyDetails } from "./components/InternshipDetailModal/CompanyDetails";
import { InternshipDetailModal } from "./components/InternshipDetailModal";
import { ToastContainer, toast } from "react-toastify";

const ProtectedRoutes = ({ allowedRoles }) => {
	// let roles = ["admin"];
	const { role } = jwt(localStorage.getItem(ACCESS_TOKEN_KEY));
	console.log(role, "roles");
	let isLoggedIn = true;
	const location = useLocation();

	if (allowedRoles?.includes(role)) return <Outlet />;
	else if (isLoggedIn)
		return <Navigate to='/unauthorized' state={{ from: location }} replace />;
	else return <Navigate to='/login' state={{ from: location }} replace />;
};

const App = () => {
	return (
		<BrowserRouter history={history}>
			<Routes>
				<Route element={<ProtectedRoutes allowedRoles={["student"]} />}>
					<Route path='/' element={<StudentHome />} />
					<Route path='/internshipDetails/1' element={<CompanyDetails />} />
					<Route path='/internshipDetails/2' element={<InternshipDetails />} />
					{/* <Route
						path='/internshipDetails/:type'
						element={<InternshipDetailModal />}
					/> */}
				</Route>
				<Route element={<ProtectedRoutes allowedRoles={["mentor", "admin"]} />}>
					<Route path='/mentor-dashboard' element={<MentorDashboard />} />
					<Route path='/add-report' element={<AddReportDetails />} />
					<Route path='/all-students' element={<AllStudents />} />
					<Route path='/students/:studentid' element={<ProfilePage />} />
					<Route path='/all-submissions' element={<ViewAllSubmissions />} />
				</Route>
				<Route
					element={
						<ProtectedRoutes allowedRoles={["student", "mentor", "admin"]} />
					}
				>
					<Route path='/profile' element={<ProfilePage />} />
				</Route>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/unauthorized' element={<Unauthorized />} />
				<Route path='/contact' element={<ContactCommitteePage />} />
				<Route path='/companies/:company' element={<Companies />} />
				<Route path='/faq' element={<FaqPage />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
};

export default App;
