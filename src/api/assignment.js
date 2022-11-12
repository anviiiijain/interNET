import { axiosInstance } from "../utils/AxiosHandler";

export const getAssignments = async () => {
	const res = await axiosInstance.get("/api/student/get-assignments");
	return res;
};

export const addAssignment = async (payload) => {
	const res = await axiosInstance.post("/api/admin/add-assignment", payload);
	return res;
};
