import { axiosInstance } from "../utils/AxiosHandler";

export const getReports = async () => {
	const res = await axiosInstance.get("/api/student/get-reports");
	return res;
};

export const addReport = async (payload) => {
	const res = await axiosInstance.post("/api/admin/add-report", payload);
	return res;
};
