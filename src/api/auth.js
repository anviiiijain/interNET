import { axiosInstance } from "../utils/AxiosHandler";

export const login = async (payload) => {
	const res = await axiosInstance.post("/api/auth/login", payload);
	return res;
};
