import { axiosInstance } from "../utils/AxiosHandler";

export const getStudents = async () => {
	const res = axiosInstance.get("/api/students");
	return res;
};

export const getStudentProfile = async () => {
	const res = axiosInstance.get("/api/student/profile");
	return res;
};

export const updateProfile = async (payload) => {
	const res = axiosInstance.post("/api/student/update-profile", payload);
	return res;
};

export const addCompany = async (payload) => {
	const res = axiosInstance.post("/api/student/add-company", payload);
	return res;
};

export const addInternship = async (payload) => {
	const res = await axiosInstance.post("/api/student/add-internship", payload);
	return res;
};
